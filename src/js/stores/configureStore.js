import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer'

export default function configureStore(initialState) {
    const createStoreWithMiddleware = compose(
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )(createStore);

    const store = createStoreWithMiddleware(rootReducer);
    return store
}
