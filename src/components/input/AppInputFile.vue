<template>
  <div
    @click="openFileSelector"
    class="app-input-file"
    :class="{ 'app-input-file--drag': isDragOver, [type]: true }"
    @drop="handleDrop"
    @dragover="handleDragOver"
    @dragleave="handleDragCancel"
  >
    <div class="filename" :class="{ active: !!_fileName }">{{ getFileName }}</div>
    <AppButton class="button">첨부하기</AppButton>
    <input
      ref="fileInput"
      class="file-input"
      :accept="getAccept"
      type="file"
      v-bind="$attrs"
      @change="handleChangeInput"
    />
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class Props {
  file = prop<File>({});
  placeholder = prop<string>({ default: "선택없음" });
  type = prop<string>({ default: "normal" });
  accept = prop<string[]>({ default: ["image/png", "image/jpeg", "image/gif"] });
}

@Options({
  emits: ["update:file", "reject"],
})
export default class AppInputFile extends Vue.with(Props) {
  private _fileName = "";

  isDragOver = false;

  openFileSelector() {
    (this.$refs.fileInput as HTMLInputElement).click();
  }

  handleDrop(e: DragEvent) {
    e.preventDefault();
    this.isDragOver = false;

    let file = e.dataTransfer?.items[0].getAsFile() ?? e.dataTransfer?.files[0];
    if (!file || (this.accept && this.accept.indexOf(file.type) == -1))
      return this.$emit("reject", false);

    this.uploadFile(file);
  }

  handleDragOver(e: Event) {
    e.preventDefault();
    this.isDragOver = true;
  }

  handleDragCancel(e: Event) {
    this.isDragOver = false;
  }

  handleChangeInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files![0];
    if (!file) return;

    this.uploadFile(file);
  }

  uploadFile(file: File) {
    this._fileName = file.name;

    this.$emit("update:file", file);
  }

  get getFileName() {
    return this._fileName || this.placeholder;
  }
  get getAccept() {
    return this.accept?.join(",") || "";
  }
}
</script>

<style lang="scss">
.app-input-file {
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 48px;

  border: 1px solid #d2d5db;
  box-sizing: border-box;
  border-radius: 8px;

  .filename {
    margin-left: 16px;

    color: #d2d5db;

    &.active {
      color: #2d2d2d;
    }
  }
  .button {
    font-weight: normal;

    margin-right: 6px;
    padding: 8px 20px;

    font-size: 13px;
    background: #ffffff;
    border: 2px solid #e8eaed;

    color: #a8abb0;
  }

  .file-input {
    display: none;
  }
}
</style>
