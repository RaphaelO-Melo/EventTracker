import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";

const useListEvents = () => {
    return useRecoilValue(listaDeEventosState);
}

export default useListEvents;