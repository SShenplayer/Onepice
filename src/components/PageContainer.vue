<script setup lang='ts'>
//Composition API
import { ShallowRef, shallowRef } from "vue";
import { useStore } from "vuex";
import { openPage } from "../common/ts/PageComponents";
const store = useStore();
let CurruntPage: ShallowRef = shallowRef(openPage("MAIN"));
const onOpenPage = (name: string) => {
  CurruntPage.value = openPage(name.toUpperCase());
};
</script>
<script lang='ts'>
//options API
export default {};
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <img
          class="logo"
          src="../assets/Logo/Logo.jpg"
          alt="404"
          @click="onOpenPage('MAIN')"
        />
        <span v-if="store.state.Account">{{
          "Welcome!! " + store.state.Account
        }}</span>
      </el-header>
      <el-main>
        <transition name="el-zoom-in-center">
          <component :is="CurruntPage" @on-open-page="onOpenPage"></component>
        </transition>
      </el-main>
      <el-footer>
        <h2>Welcome websit of OnePice!!</h2>
      </el-footer>
    </el-container>
  </div>
</template>
<style scoped>
.el-container {
  width: 1280px;
  height: 700px;
  background-color: #fff;
  border-radius: 20px;
}
.el-header {
  height: 10%;
  border-bottom: 3px solid rgb(112, 111, 111);
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.el-main {
  height: 80%;
}
.el-footer {
  height: 10%;
  border-top: 3px solid rgb(112, 111, 111);
}
.logo {
  height: 100%;
}
span {
  line-height: 70px;
  font-weight: bolder;
}
</style>