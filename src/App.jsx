import { Header } from './components/Header';
import { Video } from './components/Video';
import { Lotes } from './components/Lotes';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import { Galeria } from './components/Galery';
import { Contact } from './components/Contact';
import { Ubication } from './components/Ubication';
import { Footer } from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { useMediaQuery } from './hooks/useMediaQueries';

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Header />
      <ToastContainer
        position={isMobile ? 'top-center' : 'bottom-center'}
        {...isMobile ? { style: { top: '1rem', width: '90%', margin: '1rem'} } : null}
        autoClose={5000}
        theme='dark'
      />
      <Video />
      <Lotes />
      <WhatsAppButton />
      <Galeria />
      <div className="contact-ubication-container">
        <Contact />
        <Ubication />
      </div>
      <Footer />
    </>
  )
}

export default App
