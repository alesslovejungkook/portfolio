import './App.css'
import Header from './Header.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'   

function App() {
  return (
    <>
  
      <Header />

      <main className="main-content">
        <About />   
      </main>

      <Footer />   
    </>
  );
}

export default App;
