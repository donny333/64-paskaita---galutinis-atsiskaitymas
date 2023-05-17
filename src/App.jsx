import './App.css';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';

const App = () => {
  return (
    <>
    <Header />

    <Routes>
      <Route index element={<Home />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>

    <Footer />
    </>
  );
}
 
export default App;