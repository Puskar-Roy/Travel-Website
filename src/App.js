
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Features';
import PropertyList from './components/PropertyList';
import FeaturedProperties from './components/FeaturedProperties';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <Featured/> */}
      <PropertyList/>
      {/* <FeaturedProperties/> */}
    </div>
  );
}

export default App;
