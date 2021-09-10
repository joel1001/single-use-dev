import { combineReducers } from "redux";
import Threekit from './Threekit/reducer';
import Config from './Config/reducer';
import ModelsHandling from './modelsHandling/reducer';

const reducers = combineReducers({
    Threekit,
    Config,
    ModelsHandling,
});

export default reducers;
