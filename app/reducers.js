import { combineReducers } from "redux";
import listReducer from "./modules/Chat/reducer";
import mainApp from "./modules/MainApp/reducer";
import Inventory from "./modules/Invetory/reducer";

const rootReducer = combineReducers({
    chat: listReducer,
    render: mainApp,
    inventory: Inventory,
})

export default rootReducer;