<script setup lang='ts'>
//Composition API
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useStore } from "vuex";
//声明调用父组件
const emits = defineEmits(["onOpenPage"]);
//声明vuex数据仓库
const store: any = useStore();
//声明变量
const FormData = reactive({
  Account: "", //账号
  Password: "", //密码
  Checkcode: "", //验证码
});

const FormDataRef = ref<FormInstance>();
//自定义表单规则
const validateCode = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("please enter your Code!"));
  } else {
    if (value == "1111") {
      callback();
    } else {
      callback(new Error("1111 can be successed ！！！"));
    }
  }
};
const rules = reactive<FormRules>({
  Account: [
    { required: true, message: "please enter your account!", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  Password: [
    { required: true, message: "please enter your Password!", trigger: "blur" },
  ],
  Checkcode: [{ required: true, validator: validateCode, trigger: "blur" }],
});
const Commit = async function (FormDataRef: FormInstance | undefined) {
  if (!FormDataRef) return;
  await FormDataRef.validate((valid, fields) => {
    if (valid) {
      store.commit("ChangeLoginInfo", FormData);
      emits("onOpenPage", "MAIN");
    } else {
      console.log("error", fields);
    }
  });
};
const Reset = async function (FormDataRef: FormInstance | undefined) {
  if (!FormDataRef) return;
  FormDataRef.resetFields();
};
</script>
<script lang='ts'>
//options API
export default {};
</script>
<template>
  <div class="common-layout">
    <el-container class="main-style">
      <el-aside width="50%"
        ><img
          class="aside-image"
          src="../../assets/Login/R-C.jpg"
          alt="Can not found files extname like .jpg or .png"
      /></el-aside>
      <el-main>
        <el-form
          ref="FormDataRef"
          :model="FormData"
          :rules="rules"
          :label-position="'left'"
          :size="'large'"
          label-width="100px"
        >
          <el-form-item label="Account" prop="Account">
            <el-input
              v-model="FormData.Account"
              placeholder="please enter your account"
            />
          </el-form-item>
          <el-form-item label="Password" prop="Password">
            <el-input
              type="password"
              v-model="FormData.Password"
              placeholder="please enter your password"
              show-password
            />
          </el-form-item>
          <el-form-item label="Checkcode" prop="Checkcode">
            <el-input
              v-model="FormData.Checkcode"
              placeholder="please enter your Code"
            />
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" @click="Commit(FormDataRef)"
              >Login</el-button
            >
            <el-button @click="Reset(FormDataRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.el-aside {
  display: flex;
  justify-content: center;
  border-right: 15px dotted gray;
}
.el-main {
  display: flex;
  justify-content: center;
}
.el-form {
  margin-top: 25%;
}

.aside-image {
  height: 100%;
}
</style>