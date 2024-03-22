import './App.css';
import Header from './components/header/Header';
import Listas from './components/page/Listas';

function App() {

  return (
    <div className='container_app'>
        <header><Header/></header>
        <main><Listas/></main>
    </div>
  );
}

export default App
