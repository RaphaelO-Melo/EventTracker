import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventosState } from '../../state/atom';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {
  
  const [data, setData] = useState('');
  const [status, setStatus] = useState('');

  const setFilstroEventos = useSetRecoilState<IFiltroDeEventos>(filtroDeEventosState);
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {

    evento.preventDefault();

    const filtro : IFiltroDeEventos = {};

    if(data)
      filtro.data = new Date(data);
    else
      filtro.data = null;

    if(status)
      filtro.status = status;
    else
      filtro.status = null;

    setFilstroEventos(filtro);

  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>

    <input
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />

    <h3 className={style.titulo}>Filtrar por status</h3>
    <select
      name="estado"
      className={style.input}
      onChange={evento => setStatus(evento.target.value)}
      defaultValue="ambos"
      >
        <option value="ambos">Ambos</option>
        <option value="pendente">Pendente</option>
        <option value="concluido">Concluído</option>
    </select>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro