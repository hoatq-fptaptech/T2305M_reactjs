import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/common/nav';
import Home from './components/page/Home';
import Category from './components/page/Category';
import MyAccount from './components/page/Myaccount';
import Detail from './components/page/Detail';
//state 
function App() {
 
  return (
      <>
        <Nav />
        <main>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/category' Component={Category}/>
            <Route path='/my-account' Component={MyAccount}/>
            <Route path='/product/:id' Component={Detail}/>
          </Routes>
        </main>
      </>
  );
}

export default App;
