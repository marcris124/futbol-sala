
import futbolImg from "../assets/Images/futbolBg7.webp"
import LogoFT from "../assets/Images/LogoImg.webp"
const Home = () => {
  return (
    <div
      className="grid grid-cols-1 justify-center items-center justify-items-center content-center bg-cover bg-right md:bg-center bg-no-repeat h-screen relative z-20 "
      style={{ backgroundImage: `url(${futbolImg})`}}
    >
      <div className=" grid justify-center content-center justify-items-center w-full md:w-[40%] p-4  rounded-2xl bg-gradient-blue">
        <img src={LogoFT} width={300} height={150} className="scale-up-center" />
          <h2 className=' border-purple-700 app-h4 app-text text-center'> 
            <span className="text-transparent bg-clip-text text-white"> Todos los jugadores son mejores juntos que uno solo  </span>   </h2>
          

      </div>
       
    </div>
  )
}

export default Home