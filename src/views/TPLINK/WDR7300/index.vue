<template>
  <div class="page">
    <div class="item">
      <input type="file" ref="upload" name="请上传原版编程器固件" />
    </div>
    <div class="item">
      <button @click="calc">生成EEPROM</button>
    </div>
    <div class="item">
      提取到的LAN MAC为:{{maclan}}
    </div>
    <ol class="item">
      <li>
        点击 选择文件 按钮，选择{{$options.name}}的原版编程器固件上传
      </li>
      <li>
        点击 生成EEPROM 按钮，自动生成并下载eeprom.bin
      </li>
      <li>
        请校验提取的MAC地址是否和路由器自身MAC一致
      </li>
      <li>不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作</li>
      <li>参考教程: <a target="_blank" href="https://www.right.com.cn/forum/thread-7708743-1-1.html">制作WDR7300千兆版 V1的eeprom和分享Padavan固件</a></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "WDR7300",
  components: {},
  data() {
    return {
      maclan: "",
    };
  },
  methods: {
    calc() {
      let file = this.$refs.upload.files[0];
      if (!file) {
        alert("请上传原版编程器固件!");
        return;
      }
      this.maclan = "";
      let fileReader = new FileReader();
      fileReader.onloadend = () => {
        let fullBuffer = fileReader.result;
        let eepromBuffer = new Uint8Array(64 * 1024).fill(255);
        let buffer2g = new Uint8Array(fullBuffer.slice(0x1e000, 0x1f3ff));
        buffer2g.forEach((data, i) => {
          eepromBuffer[i] = data;
        });

        let buffer5g = new Uint8Array(eepromBuffer.slice(0x1000, 0x13ff));
        buffer5g.forEach((data, i) => {
          eepromBuffer[0x8000 + i] = data;
        });

        let bufferlanMAC = new Uint8Array(
          fullBuffer.slice(0x1d80d, 0x1d80d + 6)
        );
        let bufferwanMAC = bufferlanMAC.slice();
        bufferwanMAC[5] += 1;
        let buffer2gMAC = bufferlanMAC.slice();
        buffer2gMAC[5] += 2;
        let buffer5gMAC = bufferlanMAC.slice();
        buffer5gMAC[5] += 3;

        buffer2gMAC.forEach((data, i) => {
          eepromBuffer[0x4 + i] = data;
        });
        buffer5gMAC.forEach((data, i) => {
          eepromBuffer[0x8004 + i] = data;
        });
        bufferlanMAC.forEach((data, i) => {
          this.maclan += Number(data).toString(16).padStart(2, "0");
          eepromBuffer[0xe000 + i] = data;
        });
        bufferwanMAC.forEach((data, i) => {
          eepromBuffer[0xe006 + i] = data;
        });
        this.saveFile(eepromBuffer.buffer);
      };
      fileReader.readAsArrayBuffer(file);
    },
    saveFile(arrayBuffer) {
      let blob = new Blob([arrayBuffer], { type: "application/octet-stream" });
      let a = document.createElement("a");
      a.setAttribute("download", `${this.$options.name}-eeprom.bin`);
      a.target = "_blank";
      a.href = URL.createObjectURL(blob);
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(a.href);
    },
  },
};
</script>
<style lang="css" scoped>
.page {
  text-align: left;
  padding-left: 20px;
}
.item {
  margin-top: 10px;
}
li {
  color: red;
  font-weight: 600;
}
</style>