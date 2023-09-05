const getUsuarioActivo= (nombre) => {
    return{
        uid: "ABC456",
        nombre: nombre
    }
}
const usuarioActivo = getUsuarioActivo("Fernando");

console.log(usuarioActivo)