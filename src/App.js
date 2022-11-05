import GlobalStyle from './styles/global';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home} from './pages/Home';
import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        <GlobalStyle/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
