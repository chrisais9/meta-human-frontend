<template>
  <div
    @click="openFileSelector"
    class="app-input--image-file"
    :class="{ 'app-input--image-file--drag': isDragOver, [type]: true }"
    @drop="handleDrop"
    @dragover="handleDragOver"
    @dragleave="handleDragCancle"
  >
    <div class="app-input--image-file__preview preview-image" :style="getCheckboard">
      <div class="placeholder" v-if="!getPreviewImage && type != 'normal'">
        {{ getFileName }}
      </div>
      <img :src="getPreviewImage" alt="" />
    </div>
    <AppInput
      class="app-input--image-file__filename"
      :class="{ active: isDragOver }"
      v-if="type == 'normal' && getFileName"
      v-model="getFileName"
      disabled
    ></AppInput>
    <input
      ref="fileInput"
      class="app-input--image-file__input"
      :accept="accept.join(',')"
      type="file"
      v-bind="$attrs"
      @change="handleChangeInput"
    />
  </div>
</template>

<script lang="ts">
import checkboard from "@/modules/checkboard";
import { Options, prop, Vue } from "vue-class-component";

class Props {
  file = prop<File>({});
  previewImage = prop<string>({});
  hideFileName = prop<boolean>({ default: false });
  type = prop<string>({ default: "normal" });
  accept = prop<string[]>({ default: ["image/png", "image/jpeg"] });
  maxSize = prop<number>({ default: 1024 * 50 }); // 50KB
}

@Options({
  emits: ["update:file", "reject"],
})
export default class AppInputImageFile extends Vue.with(Props) {
  private _fileName = "선택없음";
  private _previewImageUrl = "";

  isDragOver = false;

  openFileSelector() {
    (this.$refs.fileInput as HTMLInputElement).click();
  }

  handleDrop(e: DragEvent) {
    e.preventDefault();
    this.isDragOver = false;

    let file = e.dataTransfer?.items[0].getAsFile() || e.dataTransfer?.files[0];
    if (!file || this.accept.indexOf(file.type) == -1) {
      this._fileName = `잘못된 파일 형식`;
      return this.$emit("reject", false);
    }
    if (file?.size > this.maxSize) {
      this._fileName = `용량 초과`;
      return this.$emit("reject", false);
    }

    this.uploadFile(file);
  }

  handleDragOver(e: Event) {
    e.preventDefault();
    this.isDragOver = true;
  }

  handleDragCancle(e: Event) {
    this.isDragOver = false;
  }

  handleChangeInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files![0];
    if (!file) return;

    this.uploadFile(file);
  }

  uploadFile(file: File) {
    URL.revokeObjectURL(this._previewImageUrl);

    if (!file || this.accept.indexOf(file.type) == -1) {
      this._fileName = `잘못된 파일 형식`;
      return this.$emit("reject", false);
    }
    if (file?.size > this.maxSize) {
      this._fileName = `용량 초과`;
      return this.$emit("reject", false);
    }

    this._fileName = file.name;
    this._previewImageUrl = URL.createObjectURL(file);

    this.$emit("update:file", file);
  }

  unmounted() {
    URL.revokeObjectURL(this._previewImageUrl);
  }

  get getPreviewImage() {
    return this.previewImage || this._previewImageUrl;
  }

  get getFileName() {
    return this.hideFileName ? "" : this._fileName;
  }

  get getCheckboard() {
    return {
      background: `url("${checkboard}")`,
    };
  }
}
</script>

<style lang="scss">
.app-input--image-file {
  cursor: pointer;

  display: flex;

  transition: 0.1s;

  .app-input--image-file__preview {
    cursor: pointer;
    @include clear-select;

    position: relative;

    width: 100%;
    height: 100%;

    border: 1px solid #d2d5db;
    border-radius: 8px;

    margin-right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    img {
      height: 90%;
    }

    .placeholder {
      position: absolute;
    }
  }
  .app-input--image-file__filename {
    cursor: pointer;

    flex: 1;

    height: 40px;

    font-size: 13px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .app-input--image-file__input {
    display: none;
  }
}
.app-input--image-file.expand {
  width: 100%;
  height: 100%;

  .app-input--image-file__preview {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}
</style>
