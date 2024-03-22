import './App.css';
import Header from './components/header/Header';
import Listas from './components/page';

function App() {

  return (
    <div className='container'>
        <header><Header/></header>
        <main><Listas/></main>
    </div>
  );
}

export default App
