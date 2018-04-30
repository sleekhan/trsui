import TRSList from '../model/TRSList';
import { ActionTypes, Action } from '../actions/searchAction';

export const initialState: TRSList = {
    trs: []
};

export function reducer(state: TRSList = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.searchCompleted:            
            return { trs: JSON.parse(action.payload) };
        
        default:            
            return state;
    }    
}