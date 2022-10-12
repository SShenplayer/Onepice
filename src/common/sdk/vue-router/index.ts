import { useRouter } from "vue-router";
import { ChangeURLtoAlias } from "../../utils/AliasUtils";

export function AppToADS(name: string = "ADS") {
    const router = useRouter();
    router.replace(ChangeURLtoAlias(name));
}