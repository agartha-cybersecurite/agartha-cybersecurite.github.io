import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import DicpFiro from './components/DicpFiro';
import Services from './components/Services';
import Process from './components/Process';
import Deliverables from './components/Deliverables';
import Compliance from './components/Compliance';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problem />
      {/*<DicpFiro />*/}
      <Services />
      <Process />
      <Deliverables />
      <Compliance />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
