import { Dispatch } from 'react-redux';
import * as action from '../actions/searchAction';

export function searchTrs(dispatch: Dispatch<any>, emailValue: string, startDateValue: string, endDateValue: string) {    
    dispatch(action.searchStarted());
    fetch('http://130.31.11.145:8000/trservice/v1/tr', {
        method: 'POST',        
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },        
        body: JSON.stringify({email: emailValue, startDate: startDateValue, endDate: endDateValue}),        
    }).then((res) => { 
        res.text().then(json => ({
            status: res.status,
            json
        }))        
        .then(({status, json}) => { 
            if ( status !== 200 ) {
                dispatch(action.searchCompletedWithError(status.toString()));                
            } else {
                dispatch(action.searchCompleted(json));                
            }
        });
    }).catch ((err) => {
        dispatch(action.searchCompletedWithError(err));
    });
}