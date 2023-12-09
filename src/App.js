import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <HomeScreen/>
      </Provider>
     
    </div>
  );
}

export default App;
