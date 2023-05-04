import './App.css';
import Header from './parts/Header';
import Sidebar from './parts/Sidebar';
import Feed from './parts/Feed';
import Widgets from './parts/Widgets';
import Login from './parts/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
    {
      !user ? (<Login />) :
      (<>
      <Header />
      
      <div className='app__body'>
      <Sidebar />
      <Feed />
      <Widgets />
      </div>
      
      </>)
    } 
    </div> 
  );
}  
    
export default App;
 