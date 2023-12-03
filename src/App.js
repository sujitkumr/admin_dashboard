
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserList from './Components/UserList';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<UserList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
   
  
}

export default App;
