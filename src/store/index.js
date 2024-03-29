import { createStore } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from "./reducer";
const persistConfig = {
    key: 'root',
    storage,
  }
// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const persistedReducer = persistReducer(persistConfig, reducer)
let store = createStore(persistedReducer )
let persistor = persistStore(store);
export default store
export {persistor};