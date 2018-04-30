import { combineReducers } from 'redux';
import * as screducer from './scReducer';
import * as trsreducre from './trsReducer';

export const reducer = combineReducers( { sc: screducer.reducer, trs: trsreducre.reducer } );