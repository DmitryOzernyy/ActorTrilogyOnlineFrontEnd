import { combineReducers } from "redux";
import listReducer from "./modules/Chat/reducer";
import mainApp from "./modules/MainApp/reducer";

const rootReducer = combineReducers({
    chat: listReducer,
    render: mainApp
})

export default rootReducer;