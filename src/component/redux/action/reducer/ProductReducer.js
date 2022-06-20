import { ActionTypes } from "./handleCart"

const intialState={
    products:[],
    cartData:[]
}
 export const ProductReducer=(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return {...state,cartData:[...state.cartData,action.payload]};
            default:
                return state
    }

}
