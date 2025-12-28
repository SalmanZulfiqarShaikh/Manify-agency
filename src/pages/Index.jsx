import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Services from '../components/Services';
import Process from '../components/Process';
import Faq from '../components/Faq';
import ContactStrip from '../components/ContactStrip';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Process />
        <Faq />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
