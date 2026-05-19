import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Method from './components/Method';
import Compliance from './components/Compliance';
import Deliverables from './components/Deliverables';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Method />
      <Compliance />
      <Deliverables />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}