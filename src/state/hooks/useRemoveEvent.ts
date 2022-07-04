import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useRemoveEvent = () => {

    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento: IEvento) => {
        return setListaEventos(listaAntiga => listaAntiga.filter(evts => evts.id !== evento.id));
    }

}

export default useRemoveEvent;