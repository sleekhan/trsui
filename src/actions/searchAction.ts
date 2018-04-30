
import * as ac from '../lib';

export enum ActionTypes {
    searchStarted = 'searchStarted',     
    searchCompleted = 'searchCompleted',
    searchCompletedWithError = 'searchCompletedWithError'
}

interface SearchStarted extends ac.PureAction<ActionTypes.searchStarted> {}
interface SearchCompleted extends ac.PayloadAction<ActionTypes.searchCompleted, string> {}
interface SearchCompletedWithError extends ac.PayloadAction<ActionTypes.searchCompletedWithError, string> {}

export function searchStarted(): SearchStarted {
    return {
        type: ActionTypes.searchStarted
    };
}

export function searchCompletedWithError(errorCode: string): SearchCompletedWithError {
    return {
        type: ActionTypes.searchCompletedWithError,
        payload: errorCode
    };
}

export function searchCompleted(data: string): SearchCompleted {
    console.log(data);
    return {
        type: ActionTypes.searchCompleted,
        payload: data
    };
}

export type Action = SearchStarted | SearchCompleted | SearchCompletedWithError;