import {FETCH_POST_REQUEST_STARTED,FETCH_POST_FAILURE,FETCH_POST_SUCCESS} from "../actions/actionTypes";


let initialstate = 
{
    loader:false,
    data:[],
    error:null
}

const postReducer = (state = initialstate,action)=>{

    switch(action.type){
        case FETCH_POST_REQUEST_STARTED:
            return{...state, loader:true};

        case FETCH_POST_SUCCESS:
            return{...state, data:action.payload, error:null} ;
        
        case FETCH_POST_FAILURE:
            return {...state, loader:false, error:action.payload , data:[]};
            
        default: return state;    
    }

}

export default postReducer;