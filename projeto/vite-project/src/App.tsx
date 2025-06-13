//importação de componentes
import Evento from './components/Evento'
import pudimKainao from "./public/pudim.jpeg" 

import './App.css'

function App() {
  //comentário
  return (
    <>
      <div>
        {/*comentário JSX */}
       <h1>Fundamentos React</h1>
       <Evento/>
       <img src="${pudimKainao}" alt="img" />
      </div>
    </>
  )
}

export default App
