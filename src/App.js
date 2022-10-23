import logo from './logo.svg';
import './App.css';
import { Display } from './components/Display';
import { BtnArea } from './components/BtnArea';

const App = () => {
  return (
    <div class="wrapper">
        <div class="calculator">
            <Display />
            <BtnArea/>
           
        </div>
        <div class="ball"></div>
    </div>
  );
}

export default App;
