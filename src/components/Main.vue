<script setup lang='ts'>
//Composition API
import { useStore } from "vuex";
const store = useStore();
</script>
<script lang='ts'>
//options API
export default {};
</script>
<template>
  <div class="Main">
    <button v-if="!store.state.Account" @click="$emit('onOpenPage', 'LOGIN')">
      Login
    </button>
    <button @click="$emit('onOpenPage', 'GAME')">Game</button>
    <button @click="$emit('onOpenPage', 'VIDEO')">Video</button>
    <button @click="$emit('onOpenPage', 'MINE')">Mine</button>
  </div>
</template>
<style scoped>
.Main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>