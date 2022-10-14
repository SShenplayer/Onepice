<script setup lang='ts'>
//Composition API
import { CheckfilesArrayByDir } from "../common/sdk/file-manage";
const ADSImages = CheckfilesArrayByDir(
  "D:/MyProject/project1_OnePice/vite_Client/src/assets/adsImgs"
);
console.log("ADSImages:", ADSImages);
</script>
<script lang='ts'>
//options API
export default {};
</script>
<template>
  <div>ads</div>
</template>
<style scoped>
</style>