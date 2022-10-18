import { useRouter } from "vue-router";
import { ChangeURLtoAlias } from "../../utils/AliasUtils";
const AppToADS = function (name: string = "ADS") {
    const router = useRouter();
    router.replace(ChangeURLtoAlias(name));
}
const OpenPage = function (name: string = "Main") {
    return useRouter().replace(ChangeURLtoAlias(name));
}
export { AppToADS, OpenPage }