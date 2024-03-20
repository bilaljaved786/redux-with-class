import { createStore } from "redux";
import rootRedecer from "./reducer";

const reduxStore = createStore(rootRedecer,

    // this is only for development purpose 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default reduxStore;
