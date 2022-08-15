import './App.css';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className='app__body'>
        <Sidebar />
      </div>
 
    </div> 
  );
}

export default App;
 