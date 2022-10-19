import { useRouter } from "vue-router";
import { ChangeURLtoAlias } from "../../utils/AliasUtils";
const AppToADS = function (name: string = "ADS") {
    const router = useRouter();
    router.replace(ChangeURLtoAlias(name));
}
//before Change Dom To Import {useRouter} from 'vue-router'!!
const RootPage = function (name: string = "PAGECONTAINER", useRouter: any) {
    return useRouter.replace(ChangeURLtoAlias(name));
}
export { AppToADS, RootPage }