import {FETCH_POST_REQUEST_STARTED,FETCH_POST_FAILURE,FETCH_POST_SUCCESS} from "./actionTypes";
import axios from "axios";

export const fetchPostRequestStarted = ()=>{
    return(
        {
            type:FETCH_POST_REQUEST_STARTED
        }
    )
}

export const fetchPostSuccess = (data)=>{
    return(
        {
            type:FETCH_POST_SUCCESS,
            payload:data
        }
    )
}

export const fetchPostFailure = (error)=>{
    return(
        {
            type: FETCH_POST_FAILURE,
            payload:error
        }
    )
}

export const fetchPost = (word)=>{
    return (dispatch)=>{
        dispatch(fetchPostRequestStarted());

        axios.get( `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res=>{
            dispatch(fetchPostSuccess(res.data));
        })
        .catch(error=>{
            dispatch(fetchPostFailure(error.message));
        })
        

    } 
}