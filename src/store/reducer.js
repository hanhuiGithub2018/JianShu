
import { combineReducers } from 'redux'
import headerRducer from '../components/Header/reducer'

const reducer  = combineReducers({
    header: headerRducer
});

export default reducer
