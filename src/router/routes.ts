import { ChangeURLtoAlias } from '../common/utils/AliasUtils'
const BASEURL = '/'
export const routes = [
    { path: BASEURL, component: () => import('../components/Ads.vue') },
    { path: BASEURL + 'ADS', component: () => import('../components/Ads.vue'), alias: ChangeURLtoAlias('ADS') },
    { path: BASEURL + 'LOGIN', component: () => import('../components/LOGIN/Login.vue'), alias: ChangeURLtoAlias('LOGIN') },
]
