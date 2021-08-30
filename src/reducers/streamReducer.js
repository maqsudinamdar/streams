import {
    CREATE_STREAM,
    LIST_STREAMS,
    GET_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
} from '../actions/types';


export default (state = {}, action) => {

    switch (action.type){
        
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };

        case LIST_STREAMS:
            return;

        case GET_STREAM:
            return { ...state, [action.payload.id]: action.payload };

        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };

        case DELETE_STREAM:
            return;

        default:
            return state;
    }
}