import { ChangeURLtoAlias } from '../utils/AliasUtils'
import ADS from '../../components/Ads.vue'
import PAGECONTAINER from '../../components/PageContainer.vue'
import MAIN from '../../components/Main.vue'
import LOGIN from '../../components/LOGIN/Login.vue'
import GAME from '../../components/GAME/Game.vue'
import VIDEO from '../../components/VIDEO/Video.vue'
import MINE from '../../components/MINE/Mine.vue'
//统一路径格式
const BASEURL = "/OPEN_"
export const openPage: any = function (name: string) {
    switch (ChangeURLtoAlias(name)) {
        case BASEURL + 'ADS': return ADS;
        case BASEURL + 'PAGECONTAINER': return PAGECONTAINER;
        case BASEURL + 'MAIN': return MAIN;
        case BASEURL + 'LOGIN': return LOGIN;
        case BASEURL + 'GAME': return GAME;
        case BASEURL + 'VIDEO': return VIDEO;
        case BASEURL + 'MINE': return MINE;
    }
}

