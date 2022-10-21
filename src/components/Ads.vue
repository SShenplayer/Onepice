<script setup lang='ts'>
//Composition API
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { AdsImages } from "../assets/adsImgs/index";
import { RootPage } from "../common/sdk/vue-router";
let index: number = 0;
let Adspath = ref(AdsImages[index].Path);
let useRoute = useRouter();
let ChangeAdsImages = (times: number) => {
  index >= AdsImages.length - 1 ? (index = 0) : index++;
  Adspath.value = AdsImages[index].Path;
  setTimeout(() => {
    ChangeAdsImages(times);
  }, times);
};
const OpenRootPage: any = (name: string) => {
  RootPage(name, useRoute);
};
ChangeAdsImages(5000);
</script>
<script lang='ts'>
//options API
export default {};
</script>
<template>
  <div>
    <img
      class="img-box"
      :src="Adspath"
      alt="Can not found files extname like .jpg or .png"
      @click="OpenRootPage('PAGECONTAINER')"
    />
  </div>
</template>
<style scoped>
.img-box {
  width: 100%;
  height: 100%;
}
</style>