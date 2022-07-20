import {combineReducers} from "redux";
import sysInfo from './sysInfo';
import scheduler from './scheduler';


const rootReducer = combineReducers({
    sysInfo,
    scheduler,
});

export default rootReducer;