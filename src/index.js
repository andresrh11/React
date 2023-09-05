import {heroes} from './data/heroes'

const getHeroeById= (id)=>{
    return heroes.find((x)=>x.id===id)
}

console.log(getHeroeById(4))


const getHeroeByOwner= (owner)=> heroes.filter((x)=>x.owner===owner)
    

console.log(getHeroeByOwner('Marvel'))