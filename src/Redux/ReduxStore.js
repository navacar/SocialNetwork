import {createStore, combineReducers} from "redux"
import ProfileReducer from "./ProfileReducer"
import DialogsReducer from "./DialogsReducer"
import sideBarReducer from "./sideBarReducer"


let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    sideBar: sideBarReducer
})


let Store = createStore(reducers)

export default Store