import {Routes, Route} from 'react-router-dom';
import Main from './Main';
import Introduce from './Introduce';
import Work from './Work';
import Question from './Question';

export default function Routing() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/introduce' element={<Introduce></Introduce>}></Route>
        <Route path='/work' element={<Work></Work>}></Route>
        <Route path='/question' element={<Question></Question>}></Route>
      </Routes>
    </div>
  )
}