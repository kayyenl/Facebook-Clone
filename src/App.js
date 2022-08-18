import './App.css';
import Header from './parts/Header';
import Sidebar from './parts/Sidebar';
import Feed from './parts/Feed';
import Widgets from './parts/Widgets';

function App() {
  return (
    <div className="app">
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
 
    </div> 
  );
}  
    
export default App;
 