import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from '../pages/Main';
import Introduce from '../pages/Introduce';
import Work from '../pages/Work';
import Question from '../pages/Question';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/introduce' element={<Introduce></Introduce>}></Route>
        <Route path='/work' element={<Work></Work>}></Route>
        <Route path='/question' element={<Question></Question>}></Route>
      </Routes>
    </>
  );
}

export default App;