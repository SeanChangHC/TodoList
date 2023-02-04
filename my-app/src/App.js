import './App.css';
// import { TodoPage } from './Pages/todoPage';
import { TodoPage } from './Pages/todoPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Show } from './Pages/show';
function App() {
  return (
   
    

      <>
        <div className="App">
          <Router>
            <Routes>
              <Route path='/' element={<TodoPage />}/> 
              <Route path='/:id' element={<Show/>}/> 
            </Routes>
          </Router>
        </div>
      </>
      
        
      
  );
}

export default App;
