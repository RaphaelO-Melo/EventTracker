import React from 'react';
import { useRecoilValue } from 'recoil';
import { filtroDeEventosState } from '../../state/atom';
import useListEvents from '../../state/hooks/useListEvents';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';

const ListaDeEventos: React.FC = () => {

  const todosOsEventos = useListEvents();
  const filtro = useRecoilValue(filtroDeEventosState);

  const eventos = todosOsEventos.filter(evento => {
    
    if(!filtro.data)
      return true;
    
    const mesmoDia = filtro.data.toISOString().slice(0, 10) == evento.inicio.toISOString().slice(0, 10);
    return mesmoDia;

  });

  return (<section>
    <Filtro/>
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>);

}

export default ListaDeEventos