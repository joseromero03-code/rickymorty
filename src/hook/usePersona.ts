import { useEffect, useState } from 'react'
import type { Persona } from "../types"

const usePersona=()=>{

    const [persona,setPersona]=useState<Persona[]>([])

    const traerPersona = async()=>{
      try{
        const respuesta = await fetch("https://rickandmortyapi.com/api/character")

        const datos = await respuesta.json()
        const listadoReal = datos.results.map((p:any)=>({
          id:p.id,
          nombre:p.name,
          imagen: `https://rickandmortyapi.com/api/character/avatar/${p.id}.jpeg`,
          estado:p.status
        }))
        setPersona(listadoReal)
      }
      catch(error){
        console.error("Error al traer los datos", error)
      }
    }

    useEffect(()=>{
      traerPersona()
    },[]) 
    
    
  return{
    persona,
  }
}
export default usePersona