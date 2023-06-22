import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import Addvideo from './Components/addvideo';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import PageNotFound from './Components/pageNotFound';


// import Events  from '../src/Components/Events';
// import Hooks from '../src/Components/Hooks'
// import List from './Components/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Addvideo/>} path='/add-video'/>
      <Route element={<PageNotFound/>} path='*'/>

    </Routes>
     </BrowserRouter>


     {/* <Events/>
    //  <Hooks/>
    //  <List/> */}
    </div>
  );
}

export default App;
