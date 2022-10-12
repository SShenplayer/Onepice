import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";

const VueRouter: any = createRouter({
    history: createWebHashHistory(),
    routes
})
export default VueRouter