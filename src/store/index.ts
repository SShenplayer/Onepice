import { createStore } from 'vuex'
export default createStore({
    //数据仓库
    state: {
        Account: "",
        Password: ""
    },
    //获取数据仓库数据
    getters: {},
    //自定义操作数据仓库的接口
    mutations: {
        ChangeLoginInfo(state, data) {
            state.Account = data.Account
            state.Password = data.Password
        }
    },
    //异步接口
    actions: {},
    //分包
    modules: {},
})