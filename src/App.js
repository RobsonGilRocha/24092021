import "./index.css"
//import Home from "./components/Home"<Home/>
import Header from "./components/Header"
import Footer from "./components/Footer"
import Templeto from "./components/Templete"
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <>
      <Header/>
      <Templeto/>
      <Footer/>
    </>
    </Provider>
  );
}

export default App;
