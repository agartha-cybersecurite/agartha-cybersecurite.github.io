import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Method from './components/Method';
import DicpFiro from './components/DicpFiro';
import Services from './components/Services';
import Process from './components/Process';
import Deliverables from './components/Deliverables';
import Limits from './components/Limits';
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
      <Method />
      <DicpFiro />
      <Services />
      <Process />
      <Deliverables />
      <Limits />
      <Compliance />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
