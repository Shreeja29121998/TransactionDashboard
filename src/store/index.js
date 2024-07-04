import history from '../routing/history.js';
import configureStore from './configureStore.js';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

export default store;
