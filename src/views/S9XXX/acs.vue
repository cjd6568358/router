<template>
  <div class="page">
    <div class="item">
      <input type="file" ref="upload" name="请上传bootloader固件" />
    </div>
    <div class="item">
      <button @click="calc">生成ACS</button>
    </div>
    <ol class="item">
      <li>
        点击 选择文件 按钮，选择bootloader固件上传
      </li>
      <li>
        点击 生成ACS 按钮，自动生成并下载acs.bin
      </li>
      <li>不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ACS",
  components: {},
  data () {
    return {
      maclan: "",
    };
  },
  methods: {
    calc () {
      let file = this.$refs.upload.files[0];
      if (!file) {
        alert("请上传bootloader固件!");
        return;
      }
      this.maclan = "";
      let fileReader = new FileReader();
      fileReader.onloadend = () => {
        let bootLoaderBuffer = fileReader.result;
        let acsBuffer = new Uint8Array(1000).fill(0);
        let buffer = new Uint8Array(bootLoaderBuffer.slice(0xf200, 0x101ff + 1));
        buffer.forEach((data, i) => {
          acsBuffer[i] = data;
        });
        this.saveFile(acsBuffer.buffer);
      };
      fileReader.readAsArrayBuffer(file);
    },
    saveFile (arrayBuffer) {
      let blob = new Blob([arrayBuffer], { type: "application/octet-stream" });
      let a = document.createElement("a");
      a.setAttribute("download", `acs.bin`);
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