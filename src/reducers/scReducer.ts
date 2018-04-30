
import SearchFormProps from '../model/SearchFormProps';
import { ActionTypes, Action } from '../actions/searchAction';

export const initialState: SearchFormProps = {
    editable: true,
    loading: false    
};

export function reducer(state: SearchFormProps = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.searchStarted:
            return { editable: false, loading: true };
        case ActionTypes.searchCompleted:
        case ActionTypes.searchCompletedWithError:
            return { editable: true, loading: false };
        
        default:            
            return state;
    }    
}