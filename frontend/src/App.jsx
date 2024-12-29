import { Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main child={<Home />}/>}></Route>
        <Route path='/feedback' element={<Main child={<FeedbackForm />}/>}></Route>
      </Routes>
    </>
  )
}

export default App