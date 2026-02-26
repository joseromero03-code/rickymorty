
import './App.css'
import {Card} from "./components/Card"
import {usePersona} from "./hook"
import {ElectricBorder} from "./components/Card"


function App() {
  const { persona } = usePersona()

  return (
    <>
{persona.map((p)=>(
  <ElectricBorder key={p.id} color="#7df9ff">
    <Card
      nombre={p.nombre}
      estado={p.estado}
      imagen={p.imagen}
    />
  </ElectricBorder>
))}
    </>
  )
}

export default App

