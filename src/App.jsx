import Footeranclado from './Components/Footeranclado'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InitSesion from './Components/InitSesion';
import NavBar from './Components/NavBarAnclado';
import ContentArticle from './Components/Infoprincipal';

function App() {
  return (
    <>
    <NavBar />


    <BrowserRouter>
      <Routes>
        <Route path="/initSesion" element={<InitSesion />}></Route>
        <Route path='/home' element={<ContentArticle />} />
      </Routes>
    </BrowserRouter>


    <Footeranclado/>

    </>
  )
}

export default App;
