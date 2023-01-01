import {combineReducers} from "redux";
import sysInfo from './sysInfo';
import scheduler from './scheduler';
import loading from "./loading";
import validationMessage from "./validationMessage";
import job from "./job";
import schedule from "./schedule";
import schedulerFailureLog from "./schedulerFailureLog";
import dialog from "./dialog";
import topic from "./topic";
import schedulerSuccessLog from "./schedulerSuccessLog";
import performanceSetting from "./performanceSetting";
import performance from "./performance";


const rootReducer = combineReducers({
    sysInfo,
    scheduler,
    loading,
    validationMessage,
    job,
    schedule,
    schedulerFailureLog,
    schedulerSuccessLog,
    dialog,
    topic,
    performanceSetting,
    performance,
});

export default rootReducer;