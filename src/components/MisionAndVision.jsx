import vision from "../assets/Images/bgVision.gif"
import mision from "../assets/Images/bgMision.webp"
const MisionAndVision = () => {
  return (
    <div className=" border-red-700">
    <div className=" border-orange-900">
        <div className=" p-8 " >
        <div className="border-2 border-white rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gradient-blue">
        <div className=" border-blue-700 grid md:hidden justify-center">
            <img src={mision} width={700} height={700} className="border-img"/>
            </div>
            <div className=" border-purple-800 grid justify-center content-center">
                <div className=" border-yellow-800 grid justify-center content-center text-center gap-6">
                    <h2 className="app-h2">
                        Mision
                    </h2>
                    <p className="app-span text-white">Nuestra misión como empresa es ayudar a las personas de bajos recursos o que no tienen la posibilidad, a que entren a una escuela de formación deportiva para que puedan cumplir sus sueños de ser futbolistas profesionales y lograr salir adelante. </p>
                </div>
            </div>
            <div className=" border-blue-700 hidden md:grid justify-center ">
            <img src={mision} width={400} height={400} className="border-img"/>
            </div>
</div>

        </div>
        <div className=" p-8">
        <div className="border-2 border-white rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gradient-blue">
            <div className=" border-blue-700 grid justify-center">
            <img src={vision} width={600} height={600} className="border-img"/>
            </div>
             <div className=" border-purple-800 grid justify-center content-center">
                <div className=" border-yellow-800 grid justify-center content-center text-center gap-6">
                    <h2 className="app-h2">
                        Vision
                    </h2>
                    <p className="app-span text-white">Nuestra visión como empresa, es ser reconocidos más allá de una escuela de formación deportiva, sino como una comunidad que ayuda a salir adelante a aquellos que no cuentan con los recursos suficientes y como un espacio de liberación emocional y de unión. </p>
                </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default MisionAndVision