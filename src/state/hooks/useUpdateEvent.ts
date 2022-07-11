import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"

const useUpdateEvent = () => {
    
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        return setListaDeEventos(listaAntiga => {
            const index = listaAntiga.findIndex( evt => evt.id === evento.id);
            return [...listaAntiga.slice(0, index), evento, ...listaAntiga.slice(index + 1)];
        });
    }

}

export default useUpdateEvent;