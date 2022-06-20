//action creators are return plain objects
import { ActionTypes } from "./action/reducer/handleCart"
const addCart=(product)=>{
    return{
        action:ActionTypes.addCart,
        payload:product,
    }
}
export default addCart