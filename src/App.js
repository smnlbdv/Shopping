import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import DownloadApp from './components/downloadApp/DownloadApp';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Join from './components/join/Join';
import Promo from './components/promo/Promo';


function App() {
  return (
    <div className="App">
      <Header/>
      <Promo />
      <Brands />
      <Arrivals />
      <DownloadApp />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
