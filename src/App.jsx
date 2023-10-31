import './App.css'
import { Player } from '@lottiefiles/react-lottie-player'


function App() {
  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1 className='hello'>Portifolio Hello World</h1>
        </div>

        <div className='bemvindo'>

          <Player
            src="https://lottie.host/048f7488-8518-4e7e-b3bc-0833731f8456/eMwvwTzEVz.json" loop autoplay speed={1.5}
            style={{ height: "500px", width: "800px" }}
          />

          <div className='corpo'>
            <h3 className='descricao'>Meu nome é Enzo, sou estudante de desenvolvimento de sistemas, conheço algumas tecnologias,
              dentre elas o que usamos muito no curso é a linguagem de programação Javascript, nodeJs, reactnative,
              git, github e algumas outras coisas, aqui tem alguns projetos que já fiz para você conferir!
            </h3>
          </div>

          <div className='projetos'>
            <h2>Meus Projetos:</h2>
            <div className='proj1' > <a href="https://rickmorty-nu.vercel.app/"><img src="https://s2-techtudo.glbimg.com/QDIYAODrGD6Wx6lO5ALZoplvQJw=/0x0:1200x800/888x0/smart/
                filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/w/q/GQtAzUSC23yGNHAaG36A/8641cd99-093f-4f85-9a26-388494eb3a7f.jpg"
                width={500} height={281} /><h3 className='rick'> Este é um projeto de uma API sobre a série Rick e Morty, onde se pode
                visualizar algumas características deles e seus episódios!</h3></a> 
            </div>

            <div className='proj2'><a href="https://github.com/enzomuniz/C.git"><img src="https://sm.ign.com/ign_br/screenshot/default/cartolafc2_b7x1.jpg"
              width={500} height={281} />
              <h3 className='cartola'>Este é um projeto de também uma API, porém é voltado ao público do futebol,
                passando pelos times que estão no brasileirão e seus respectivos jogadores </h3></a>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default App
