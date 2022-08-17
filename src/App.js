import './App.css';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import Feed from './pages/Feed';

function App() {
  return (
    <div className="app">
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
 
    </div> 
  );
}  
    
export default App;
 