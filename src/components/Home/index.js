import {useSelector, useDispatch} from 'react-redux'
import {Container, Wallpaper} from "./styles"


function Home() {
    
    const aluno = useSelector( state => state.aluno);
    const load = useSelector( state => state.load);
    const colorDark = useSelector( state => state.colorDark);
    const error = useSelector( state => state.error);
    const user = useSelector( state => state.user);
    const password = useSelector( state => state.password);
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
  function LOGINUSER (event){
    dispatch({ type: 'LOGIN_USER', user: event.target.value})
    }
  function LOGINPASS (event){
    dispatch({ type: 'LOGIN_PASS', password: event.target.value})
    }
console.log(user, password)
    return (
      <Wallpaper>
          
        <Container>
    <ol>
    <h1>Home</h1>
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
        <li>
        <h2>formulario</h2>
            
            <h3>usuario</h3>
            <input type="text" onChange={LOGINUSER} />
            <h3>senha</h3>
            <input type="text" onChange={LOGINPASS} />
            <h1>{user}<p/>{password}</h1>
        </li>
    </ol>
    </Container>
       </Wallpaper>
    );
  }

  export default Home;