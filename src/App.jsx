import { Header } from './components/Header';
import { Video } from './components/Video';
import { Lotes } from './components/Lotes';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Galeria } from './components/Galery';
import { Contact } from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <ToastContainer 
        position='bottom-center'
        autoClose={5000}
        theme='dark'
        style={{
          width: '25%',
        }}
        toastClassName="custom-toast"
      />
      <Video />
      <Lotes />
      <WhatsAppButton />
      <Galeria />
      <Contact />
    </>
  )
}

export default App
