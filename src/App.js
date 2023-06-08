import './App.css';
import Topo from '../src/componentes/Topo/'
import Conteudo from '../src/componentes/Conteudo/'
import Rodape from '../src/componentes/Rodape/'

function App() {
  return (
    <div className="App">
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;
