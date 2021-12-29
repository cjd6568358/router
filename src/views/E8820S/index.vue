<template>
  <div class="page">
    <div class="item">
      <input type="file" ref="upload" name="请上传原版编程器固件" />
    </div>
    <div class="item">
      请选择Flash类型
      <label><input type="radio" ref="spi" name="flash" :value="64" checked>spi(64KB)</label>
      <label><input type="radio" name="flash" :value="256">nand(256KB)</label>
    </div>
    <div class="item">
      <button @click="calc">生成EEPROM</button>
    </div>
    <div class="item" v-if="mac2g">
      提取到的2.4G MAC为:{{mac2g}} ,5G MAC为:{{mac5g}}
    </div>
    <ol class="item">
      <li>
        点击 选择文件 按钮，选择E8820S的原版编程器固件上传
      </li>
      <li>
        点击 生成EEPROM 按钮，自动生成并下载eeprom.bin
      </li>
      <li>
        请校验提取的MAC地址是否和路由器自身MAC一致
      </li>
      <li>不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "E8820V2",
  components: {},
  data() {
    return {
      mac2g: "",
      mac5g: "",
    };
  },
  methods: {
    calc() {
      let file = this.$refs.upload.files[0];
      if (!file) {
        alert("请上传原版编程器固件!");
        return;
      }
      let fileReader = new FileReader();
      fileReader.onloadend = () => {
        let fullBuffer = fileReader.result;
        let buffer2gMAC = new Uint8Array(
          fullBuffer.slice(0x220012, 0x220012 + 6)
        );
        let buffer5gMAC = new Uint8Array(
          fullBuffer.slice(0x22001e, 0x22001e + 6)
        );
        let buffer2g = new Uint8Array(
          fullBuffer.slice(0x36f000, 0x36f000 + 0x130 + 1)
        );
        let buffer5g = new Uint8Array(
          fullBuffer.slice(0x36f800, 0x36f800 + 0x1f0 + 1)
        );
        let eepromBuffer = new Uint8Array(
          (this.$refs.spi.checked ? 64 : 256) * 1024
        ).fill(255);
        buffer2g.forEach((data, i) => {
          eepromBuffer[i] = data;
        });
        buffer5g.forEach((data, i) => {
          eepromBuffer[0x8000 + i] = data;
        });
        buffer2gMAC.forEach((data, i) => {
          this.mac2g += Number(data).toString(16).padStart(2, "0");
          eepromBuffer[0xe000 + i] = data;
        });
        buffer5gMAC.forEach((data, i) => {
          this.mac5g += Number(data).toString(16).padStart(2, "0");
          eepromBuffer[0xe006 + i] = data;
        });
        [("C0", "81", "82", "C3", "04", "45", "46", "07", "08", "09")].forEach(
          (data, i) => {
            eepromBuffer[0x81e0 + i] = Number(`0x${data}`);
          }
        );
        this.saveFile(eepromBuffer.buffer);
      };
      fileReader.readAsArrayBuffer(file);
    },
    saveFile(arrayBuffer) {
      let blob = new Blob([arrayBuffer], { type: "application/octet-stream" });
      let a = document.createElement("a");
      a.setAttribute("download", "eeprom.bin");
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