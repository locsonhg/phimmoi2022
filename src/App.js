import './App.scss';
import Header from './component/header/header';
import Listmovie from './component/listmovie/listmovie';
import Footer from './component/footer/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Detail from './component/detail/detail';
import Watch from './component/watch/watch';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Listmovie/>} exact/>
        <Route path='/:slug' element={<Detail/>}/>
        <Route path='/:slug/:tap' element={<Watch/>}/>

      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
