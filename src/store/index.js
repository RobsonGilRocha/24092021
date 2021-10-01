import { createStore } from 'redux';

const INITIAL_STATE = {
    aluno: false,
    load: false,
    colorDark: false,
    error: false,
  }

  function truefalse(state = INITIAL_STATE, action){
        switch (action.type) {
            case 'ALUNO_TRUE' :
                return { ...state, aluno: true};
            case 'AlUNO_FALSE' :
                return { ...state, aluno: false};
            case 'LOAD_TRUE' :
                return { ...state, load: true};
            case 'LOAD_FALSE' :
                return { ...state, load: false};
            case 'COLORDARK_FALSE' :
                  return { ...state, colorDark: false};
            case 'COLORDARK_TRUE' :
                  return { ...state, colorDark: true};
            case 'ERROR_FALSE' :
                  return { ...state, error: false};
            case 'ERROR_TRUE' :
                  return { ...state, error: true};
                default:
                    return state;
        }
  }

const store = createStore(truefalse)

export default store;