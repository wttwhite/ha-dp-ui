<template>
  <el-upload
    ref="elUpload"
    drag
    action="#"
    multiple
    :before-upload="beforeAvatarUpload"
    :http-request="httpRequest"
    :file-list="fileList"
    :on-preview="onPreview"
    :on-remove="onRemove"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">
      {{ computedFileTypeText }}
    </div>
  </el-upload>
</template>
<script>
export default {
  name: "hspro-upload-ids",
  props: {
    value: { type: String, default: "" },
    fileType: { type: Array, default: () => [] },
    fileSize: { type: Number, default: 0 }, // M为单位
    uploadToIdApi: { type: Function },
    removeByIdApi: { type: Function },
    getFileInfoByIdsApi: { type: Function },
    limit: { type: Number },
  },
  data() {
    return {
      fileList: [],
      timer: null,
    };
  },
  computed: {
    computedFileTypeText() {
      let text = "";
      if (this.fileSize) {
        text = `单文件不超过${this.fileSize}M`;
      }

      if (this.fileType.length) {
        const typeText = `只能上传'${this.fileType.join(" ")}'文件`;
        this.fileSize ? (text += `, 且${typeText}`) : (text = typeText);
      }
      return text;
    },
  },
  mounted() {
    const unwatch = this.$watch("value", (n) => {
      if (n) {
        this.getDetail(n);
      } else {
        this.fileList = [];
      }
      unwatch();
    });
  },
  methods: {
    getDetail(n) {
      const params = new FormData();
      params.append("ids", n);
      this.getFileInfoByIdsApi(params).then((res) => {
        this.fileList = res.map((item) => {
          return {
            ...item,
            name: item.fileName,
          };
        });
      });
    },
    formateFileToIds(list) {
      let arr = [];
      list.forEach((item) => {
        arr.push(item.id);
      });
      return arr.join(",");
    },
    onRemove(file) {
      console.log(file);
      if (file && file.status === "success") {
        const params = { id: file.id };
        this.fileList.splice(
          this.fileList.findIndex((item) => item.id === file.id),
          1
        );
        // fileList.splice(fileList.indexOf(file), 1);
        this.$emit("input", this.formateFileToIds(this.fileList));
        this.removeByIdApi(params);
      }
    },
    onPreview(file) {
      window.open(file.url);
    },
    httpRequest(file) {
      let fileObj = file.file;
      let formData = new FormData();
      formData.append("file", fileObj);
      formData.append("extName", fileObj.name);
      let uid = fileObj.uid;
      let idx = this.$refs.elUpload?.uploadFiles.findIndex(
        (item) => item.uid === uid
      );
      console.log("this.$refs.elUpload", this.$refs.elUpload);
      console.log("idxidxidx", idx);
      // 增加进度条，httpRequest好像没有进度条
      this.setProgress(idx, 0, "uploading");
      this.stepProgress(idx);
      this.uploadToIdApi(formData)
        .then((res) => {
          res.name = res.fileName;
          this.fileList.push(res);
          this.clearTimer();
          this.setProgress(idx, 100, "success");
          // 抛出数据
          this.$emit("input", this.formateFileToIds(this.fileList));
        })
        .catch(() => {
          this.$refs.elUpload &&
            (this.$refs.elUpload.uploadFiles[idx].status = "fail");
          this.$refs.elUpload?.uploadFiles.splice(idx, 1);
        });
    },
    beforeAvatarUpload(file) {
      if (this.limit) {
        const len = this.fileList.length;
        if (len >= this.limit) {
          this.$message.error(
            `最多支持${this.limit}个文件上传，当前已经上传${len}个文件`
          );
          return false;
        }
      }
      let fileName = file.name;
      let pos = fileName.lastIndexOf(".");
      let lastName = fileName.substring(pos, fileName.length);

      if (
        this.fileType.length &&
        !this.fileType.includes(lastName.toLowerCase())
      ) {
        this.$message.error("文件格式不正确");
        return false;
      }

      if (this.fileSize) {
        const isLimitSize = file.size / 1024 / 1024 <= this.fileSize;
        if (!isLimitSize) {
          this.$message.warning(`请上传大小不超过${this.fileSize}M的文件`);
          return false;
        }
      }
    },
    // 进度条相关
    stepProgress(idx) {
      this.clearTimer();
      this.timer = setInterval(() => {
        const flag =
          this.$refs.elUpload?.uploadFiles[idx] &&
          this.$refs.elUpload.uploadFiles[idx].percentage;
        if (flag || flag === 0) {
          this.$refs.elUpload.uploadFiles[idx].percentage < 90 &&
            (this.$refs.elUpload.uploadFiles[idx].percentage += 10);
        }
      }, 500);
    },
    setProgress(idx, percent, status) {
      const flag =
        this.$refs.elUpload?.uploadFiles[idx] &&
        this.$refs.elUpload.uploadFiles[idx].percentage;
      if (flag || flag === 0) {
        this.$refs.elUpload.uploadFiles[idx].percentage = percent;
        this.$refs.elUpload.uploadFiles[idx].status = status;
      }
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  destroyed() {
    this.clearTimer();
  },
};
</script>
<style lang="scss" scoped>
// 没有内容，打包不会生成style.css
.demo {
}
</style>
