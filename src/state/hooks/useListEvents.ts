import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "../selectors";

const useListEvents = () => {
    return useRecoilValue(eventosFiltradosState);
}

export default useListEvents;