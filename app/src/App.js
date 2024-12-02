import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import SelectedNews from './pages/selectedNews/SelectedNews';
import NewsGrid from './pages/newsList/NewsGrid';
import Category from './pages/category/Category';
import { images } from './utils/images';
import { useState, useEffect } from "react"

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])


  return (
    <div className="App">
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", textAlign: "center", marginTop: "280px" }}>
          <img src={images.loading} width="100px" height="100px" />
        </div>
      ) : (
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/selected-news" element={<SelectedNews />} />
            <Route path="/trending-news" element={<NewsGrid />} />
            <Route path="/discover-more" element={<Category />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
