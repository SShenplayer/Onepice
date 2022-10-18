<script setup lang='ts'>
//Composition API
import { AdsImages } from "../assets/adsImgs/index";
import { reactive, ref } from "vue";
import { OpenPage } from "../common/sdk/vue-router";
let index: number = 0;
let Adspath = ref(AdsImages[index].Path);
let ChangeAdsImages = (times: number) => {
  index >= AdsImages.length - 1 ? (index = 0) : index++;
  Adspath.value = AdsImages[index].Path;
  setTimeout(() => {
    ChangeAdsImages(times);
  }, times);
};
const OpenRootPage: any = (name: string) => {
  OpenPage(name);
};
ChangeAdsImages(10000);
</script>
<script lang='ts'>
//options API
export default {};
</script>
<template>
  <div>
    <img class="img-box" :src="Adspath" alt="" @click="OpenRootPage('LOGIN')" />
  </div>
</template>
<style scoped>
.img-box {
  width: 100%;
  height: 100%;
}
</style>