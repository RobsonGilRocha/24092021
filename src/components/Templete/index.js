import {useSelector, } from 'react-redux'
import {Templente} from "./styles";
import Home from '../Home';

function Templento() {
    const aluno = useSelector( state => state.aluno);

  

    return (
      <Templente>
          <ul>{aluno ? <Home/>:<h1>ALUNO_FALSE</h1>}</ul>
          <ul>{aluno ? <h1>ALUNO_TRUE</h1>:<Home/>}</ul>
       </Templente>
    );
  }


  export default Templento;

