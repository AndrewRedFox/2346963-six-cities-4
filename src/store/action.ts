import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/types';

export const changeCity = createAction('changeCity', (city: City) => ({
  payload: city,
}));
export const completeList = createAction('completeList');
export const setSorting = createAction('setSorting', (sortType: string) => ({
  payload: sortType,
}));
