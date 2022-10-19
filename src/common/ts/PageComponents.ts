import { ChangeURLtoAlias } from '../utils/AliasUtils'
import ADS from '../../components/Ads.vue'
import PAGECONTAINER from '../../components/PageContainer.vue'
import MAIN from '../../components/Main.vue'
import LOGIN from '../../components/LOGIN/Login.vue'
//统一路径格式
const BASEURL = "/OPEN_"
export const openPage: any = function (name: string) {
    switch (ChangeURLtoAlias(name)) {
        case BASEURL + 'ADS': return ADS;
        case BASEURL + 'PAGECONTAINER': return PAGECONTAINER;
        case BASEURL + 'MAIN': return MAIN;
        case BASEURL + 'LOGIN': return LOGIN;
    }
}

