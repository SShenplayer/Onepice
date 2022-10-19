<script setup lang='ts'>
//Composition API
</script>
<script lang='ts'>
//options API
export default {};
</script>
<template>
  <div class="Main">
    <button @click="$emit('onOpenPage', 'LOGIN')">Login</button>
    <button>Game</button>
    <button>Video</button>
    <button>Mine</button>
  </div>
</template>
<style scoped>
.Main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>