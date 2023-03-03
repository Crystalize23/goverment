import './App.css';
import Navbar from './bar/Navbar.jsx';
import Slide from './pages/Slide.jsx';
import Service from './pages/Service2.jsx';
import Info from './pages/Info.jsx';
import Footer from './pages/Footers.jsx';
import Berita from './pages/Berita.jsx';
import Topbar from './bar/Topbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home/> */}
      <Slide />
      <Service />
      {/* <Galery/> */}
      <Info />
      <Berita />

      <br />

      <Topbar />
      <Footer />
    </div>
  );
}

export default App;
