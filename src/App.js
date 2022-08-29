import Footer from './components/footer/footer';
import GuitaristSection from './components/guitaristSection/guitaristSection';
import Header from './components/Header/header';
import Main from './components/main/main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
           <Route path="/" element={<Main/>}/>
           <Route path="guitaristSection" element={<GuitaristSection/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
