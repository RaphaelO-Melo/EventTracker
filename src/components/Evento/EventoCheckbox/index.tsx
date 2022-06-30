import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useUpdateEvent from '../../../state/hooks/useUpdateEvent';

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ evento }) => {
  
  const atualizarEvento = useUpdateEvent();

  const alterarStatus = () => {

    const novoEvt = {...evento}
    novoEvt.completo = !novoEvt.completo;
    atualizarEvento(novoEvt);

  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox