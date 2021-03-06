import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventosState, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        
        const filtro = get(filtroDeEventosState);
        const todosOsEventos = get(listaDeEventosState);

        const eventos = todosOsEventos.filter(evento => {
            
            let valido = false;

            if(!filtro.data && !filtro.status)
                return true;
                
            if(filtro.data){
                valido = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
            }

            if(filtro.status){

                console.log(filtro.status);
                

                switch(filtro.status){
                    case "ambos":
                        valido = true;
                        break;
                    case "pendente":
                        if(evento.completo === false)
                            valido = true;
                        break;
                    case "concluido":
                        if(evento.completo === true)
                            valido = true;
                        break;
                }
                
            }

            return valido;
            
        });

        return eventos;

    }
});

export const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {

        const respostaHtpp = await fetch('http://localhost:8080/eventos');
        const eventosJson: IEvento[] = await respostaHtpp.json();
        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }));
    }
});