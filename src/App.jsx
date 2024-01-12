import { useState } from 'react'
import './App.css'
import {Button, Image} from 'react-bootstrap';
import closedBox from './img/gift-box-closed.png';
import IMAGES from './img/Images';
import downloadPDF from './files/ticketdirect-1_Riccardo.pdf';


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isNotFirst, setIsNotFirst] = useState(false)

  const handleGiftOpen = () => {
    const pdfUrl = "/src/files/ticketdirect-1_Riccardo.pdf";
    const pdf = downloadPDF;
    const link = document.createElement("a");
    //link.href = pdfUrl;
    link.href = downloadPDF;
    link.download = "ticket_Riccardo.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsOpen(true)
    !isNotFirst && setIsNotFirst(true)
  } 

  const handleGiftClose = () => {
    setIsOpen(false)
  }

  return (<>
      {isNotFirst || isOpen ?
      <div>
        <h1>Penso che gli auguri siano sufficienti.</h1>
        <h2>Però se hai bisogno di riscaricare il biglietto, clicca pure.</h2>
      </div>:
      <h1>Happy birthday Doc❤️!</h1>}
      <div>
        {isOpen ?
        <div>
          <Button className="gift opened-gift" onClick={() => handleGiftClose()}>
            <Image src={IMAGES.openedBox}/>
          </Button>
          <p>Beccate sto regalo! N'estate de focu!</p>
        </div> :
        <Button className="gift closed-gift" onClick={() => handleGiftOpen()}>
          <Image src={IMAGES.closedBox} alt='first image'/>
        </Button>}
      </div>
  </>)
}

export default App
