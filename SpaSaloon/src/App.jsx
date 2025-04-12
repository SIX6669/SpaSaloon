import Header from './componentes/Header';
import './App.css';
import Card from './componentes/cards';
import Hero from "./componentes/Body/hero";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="header-spacer"></div>
      <Hero />
      <div className="div-masaje">
      <Card title={"Masajes"}/>
      </div>
      <main>
        
      </main>
    </div>
  );
}
export default App;