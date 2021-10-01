import "./index.css"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Templete from "./components/Templete"
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Templete>
        <Header/>
        <Home/>
        <Footer/>
      </Templete>
    </Provider>
  );
}

export default App;
