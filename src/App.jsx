
import './App.css'
import Home from './components/Home'
import MisionAndVision from './components/MisionAndVision'
import videoBg from "./assets/Videos/BgVideo2.mp4"
import CorporateValues from './components/CorporateValues'
function App() {


  return (
    <>
      <main className="h-full w-full scrollbar-none">
         <div className="video-container ">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src={videoBg} type="video/mp4" />
          {/* Agrega más <source> según los formatos de video compatibles */}
          Tu navegador no admite el elemento de video.
        </video>
      </div>
        <div className="flex flex-col gap-20 scrollbar-none relative z-20">
       
         <Home/>
         <MisionAndVision/>
         <CorporateValues/>
        </div>|
      </main>
    </>
  )
}

export default App
