
import Image from "next/image";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SliderPage from "./Components/SliderPage";
import Digonode from "./Components/Digonode";
import Footer from "./Components/Footer";
import PrinterSetupGuide from "./Components/PrinterSetupGuide";
import JivoChat from "./JivoChat";

export default function Home() {
  return (
    <>
      <Navbar/>
   
    <Header/>

  <SliderPage/>
  <Digonode/>
  <PrinterSetupGuide/>
  <Footer/>
  <JivoChat/>
    
      


    </>
  )
}
