import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./selectors";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAsync
});

export const filtroDeEventosState = atom<IFiltroDeEventos>({
    key: 'filtroDeEventosState',
    default: {}
});