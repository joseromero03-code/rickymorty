import ElectricBorder from "./ElectricBorder"

interface Props {
  nombre: string
  imagen: string
  estado: string
}

function Card({ imagen, nombre, estado }: Props) {
  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1}
      chaos={0.12}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <img src={imagen} alt="" />
      <h3>{nombre}</h3>
      <p>{estado}</p>
    </ElectricBorder>
  )
}

export default Card