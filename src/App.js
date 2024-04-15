import './App.css';
import Header from './Header';
import ImageSlider from './imageSlider';
function App() {
  const country = 'India';
  return (
    <div className="App">
      <Header country={country} />
      <ImageSlider/>
    </div>
  );
}

export default App;
