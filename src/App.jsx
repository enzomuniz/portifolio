import './App.css'
import { Player } from '@lottiefiles/react-lottie-player'


function App() {
  return (
    <>
    <div className='container'>
      <div className='header'>
        <h1>Portifolio Enzo Muniz Mendonça </h1>
      </div>
    <div className='bemvindo'>
      <Player
        src="https://lottie.host/048f7488-8518-4e7e-b3bc-0833731f8456/eMwvwTzEVz.json" loop autoplay speed={1.5} 
        style={{ height: "500px", width: "500px"}}
        />
        <div className='corpo'>



        </div>
</div>
</div>
    </>
  )
}

export default App
