import './App.css';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Question from './components/pages/Question Page/Question';
import QuestionEdit from './components/pages/QuestionEdit';
import QuestionAdd from './components/pages/QuestionAdd';

const App = () => {
  return (
    <>
    <Header />

    <Routes>
      <Route index element={<Home />}/>
      <Route path=':id' element={<Question />}/>
      <Route path=':id/edit' element={<QuestionEdit />}/>
      <Route path='/add-question' element={<QuestionAdd />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />} />
    </Routes>

    <Footer />
    </>
  );
}
 
export default App;