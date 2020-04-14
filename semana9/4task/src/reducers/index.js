import  todos  from './todos';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  id: 'id',
  texto: '',
  completa: ''
});

export default rootReducer;