import  {getHeroeById}  from "./Bases/08-find-filter";



// const promesa = new Promise( (resolved, reject)=>{
//     setTimeout(()=>{
//         const heroe= getHeroeById(2)
//         resolved(heroe)
//         console.log('5 segundos despues')
//     },5000)
// }

// );

// promesa.then((heroe)=>{
//     setTimeout(()=>{
        
//         console.log(heroe)
//     },10000)
// })
// .catch(err=>console.warn(err))


const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolved, reject)=>{
        setTimeout(()=>{
            const heroe= getHeroeById(id);
            heroe?resolved(heroe):reject('no se encontro el heroe');
            console.log('5 segundos despues')
        },5000)
    }
    
    );
   
}

getHeroeByIdAsync(10).then((heroe)=>{
        setTimeout(()=>{
            
            console.log(heroe)
        },10000)
    })
    .catch(err=>console.warn(err))