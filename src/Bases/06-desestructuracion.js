//06-desestructuracion
//asignacion desestructurante

const persona ={
    nombre:"tony",
    edad: 45,
    clave: 'ironman'
};

//const {nombre,edad,clave} = persona;

const useContext =({nombre,edad,clave}) =>{
    return{
        nombreClave:clave,
        anios:edad
    }
}

const avenger = useContext(persona)
console.log(avenger)
