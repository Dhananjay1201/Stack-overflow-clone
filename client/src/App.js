import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar/Navbar'
import AllRoutes from'./AllRoutes'
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/Users';
function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])
  
  return (
    <div className='App'>
      <Router>
       <Navbar/>
        
        <AllRoutes/>
      </Router>
    </div>
    
  );
}
console.log(require('./components/LeftSidebar/LeftSidebar'));

export default App;
