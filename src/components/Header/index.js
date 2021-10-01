import {useSelector, useDispatch} from 'react-redux'
import {HeaderWall} from "./styles"

function Header() {
  const aluno = useSelector( state => state.aluno);
  const load = useSelector( state => state.load);
  const colorDark = useSelector( state => state.colorDark);
  const error = useSelector( state => state.error);
  const dispatch = useDispatch();

function ALUNOTRUE (){
  dispatch({ type: 'ALUNO_TRUE'})
}
function ALUNOFALSE (){
  dispatch({ type: 'AlUNO_FALSE'})
}
function LOADTRUE (){
  dispatch({ type: 'LOAD_TRUE'})
}
function LOADFALSE (){
dispatch({ type: 'LOAD_FALSE'})
}
function COLORDARKTRUE (){
  dispatch({ type: 'COLORDARK_TRUE'})
}
function COLORDARKFALSE (){
dispatch({ type: 'COLORDARK_FALSE'})
}
function ERRORTRUE (){
  dispatch({ type: 'ERROR_TRUE'})
}
function ERRORFALSE (){
dispatch({ type: 'ERROR_FALSE'})
}

    return (
      <HeaderWall>
        <ol>
          <h1>Header</h1>
            <li>
            {aluno ? <h1>ALUNO_TRUE</h1>:<h1>ALUNO_FALSE</h1>}
                <button onClick={ALUNOTRUE}>ALUNO_TRUE</button>
                <button onClick={ALUNOFALSE}>ALUNO_FALSE</button>
            </li> 
            <li>
            {load ? <h1>LOAD_TRUE</h1>:<h1>LOAD_FALSE</h1>}
                <button onClick={LOADTRUE}>LOAD_TRUE</button>
                <button onClick={LOADFALSE}>LOAD_FALSE</button>
            </li>
            <li>
            {colorDark ? <h1>COLORDARK_TRUE</h1>:<h1>COLORDARK_FALSE</h1>}
                <button onClick={COLORDARKTRUE}>COLORDARK_TRUE</button>
                <button onClick={COLORDARKFALSE}>COLORDARK_FALSE</button>
            </li>
            <li>
            {error ? <h1>ERROR_TRUE</h1>:<h1>ERROR_FALSE</h1>}
                <button onClick={ERRORTRUE}>ERROR_TRUE</button>
                <button onClick={ERRORFALSE}>ERROR_FALSE</button>
            </li>
        </ol>
      </HeaderWall>
    );
  }

  export default Header;