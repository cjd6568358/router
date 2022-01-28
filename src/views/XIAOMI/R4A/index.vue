<template>
  <div class="page">
    <div class="item">
      <input type="file" ref="upload" name="请上传原版编程器固件" />
    </div>
    <div class="item">
      <button @click="calc">生成EEPROM</button>
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
      <li>参考教程: <a target="_blank" href="https://www.right.com.cn/forum/thread-4114097-1-1.html">请大佬给看看R4A备份了原机编程器固件，不知道怎么用WINHEX提取EEPROM</a></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "R4A",
  components: {},
  data() {
    return {};
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
        let eepromBuffer = new Uint8Array(64 * 1024).fill(255);
        let buffer2g = new Uint8Array(fullBuffer.slice(0x50000, 0x5fff0));
        buffer2g.forEach((data, i) => {
          eepromBuffer[i] = data;
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