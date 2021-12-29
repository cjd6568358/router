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
        点击 选择文件 按钮，选择E8820V2的原版编程器固件上传
      </li>
      <li>
        点击 生成EEPROM 按钮，自动生成并下载eeprom.bin
      </li>
      <li>不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "E8820V2",
  components: {},
  methods: {
    calc() {
      let file = this.$refs.upload.files[0];
      console.log(file);
      if (!file) {
        alert("请上传原版编程器固件!");
        return;
      }
      let fileReader = new FileReader();
      fileReader.onloadend = () => {
        let fullBuffer = fileReader.result;
        let buffer2gMAC = new Uint8Array(
          fullBuffer.slice(0x20014, 0x20019 + 1)
        );
        let buffer5gMAC = new Uint8Array(
          fullBuffer.slice(0x20024, 0x20029 + 1)
        );
        let buffer2g = new Uint8Array(fullBuffer.slice(0x2f000, 0x2f130 + 1));
        let buffer5g = new Uint8Array(fullBuffer.slice(0x2f800, 0x2f930 + 1));
        let eepromBuffer = new Uint8Array(64 * 1024).fill(255);
        buffer2g.forEach((data, i) => {
          eepromBuffer[i] = data;
        });
        buffer5g.forEach((data, i) => {
          eepromBuffer[0x8000 + i] = data;
        });
        buffer2gMAC.forEach((data, i) => {
          eepromBuffer[0xe000 + i] = data;
        });
        buffer5gMAC.forEach((data, i) => {
          eepromBuffer[0xe006 + i] = data;
        });
        ["C0", "81", "82", "C3", "04", "45", "46", "07", "08", "09"].forEach(
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