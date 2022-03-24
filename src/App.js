import './App.css';
import Table from './components/Table';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Table/>} />
        </Routes>
    </BrowserRouter>
    
  )
  
}

export default App;
