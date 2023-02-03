import logo from './logo.svg';
import './App.css';
import { TodoPage } from './Pages/todoPage';
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  RouterProvider,
} from "react-router-dom";
import { Show } from './Pages/show';
function App() {
  return (
   
    

      <>
        <div className="App">
          <Router>
            <Routes>
              <Route exact path='/' element={<TodoPage/>}/>
              <Route path='/:id'element={<Show/>}/>
            </Routes>
          </Router>
        </div>
      </>
      
        
      
  );
}

export default App;
