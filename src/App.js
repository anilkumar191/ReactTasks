import SendData from './SendData/SendData';
import ReceivarData from './ReceivarData/ReceivarData';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index Component={SendData}/>
      <Route path="/receivardata" Component={ReceivarData}/>
    </Routes>
    </BrowserRouter>
    
   
  );
}

export default App;
