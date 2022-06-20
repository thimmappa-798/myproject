
import handleCart from './action/reducer/handleCart'
import { combineReducers } from 'redux'

const rootReducers=combineReducers({
    handleCart,
})

export default rootReducers