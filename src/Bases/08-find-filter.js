import {heroes} from '../data/heroes'

export  const getHeroeById =(id)=>{
    return heroes.find((x)=>x.id===id)
}




const getHeroeByOwner= (owner)=> heroes.filter((x)=>x.owner===owner)
    
