import Header from './componentes/Header';
import './App.css';
import Card from './componentes/cards';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="header-spacer"></div>
      <main>
        {
      <Card 
        title="Masajes" 
        imageSrc="https://media.istockphoto.com/id/469916170/es/foto/mujer-joven-relajante-en-back-sesi%C3%B3n-de-masajes-en-el-spa.jpg?s=612x612&w=0&k=20&c=iAfOX5R3KqhcnFVDuu0WG41FyyBKtQV_3hepUqMZvkY=" 
        />
        }
      </main>
    </div>
  );
}

export default App;