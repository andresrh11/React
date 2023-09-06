// Before Async Await
// const getImagenPromise = () =>{
//     return new Promise((res)=>{
//         res('Hola')
//     })
// }
// getImagenPromise().then(console.log)

//import { peticion } from "./Bases/10-fetch"

// After Async Await

//ejemplo 1

// const getImagen = async ()=>{
//     return await peticion
// }
// getImagen()

//ejemplo 2

const getImg = async () => {
    try {
      const apiKey = "ulf6ExkvuxjSpVRnXiIIGzpn1pZXE8HX";
      const promise = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      const { data } = await promise.json();
      const { url } = await data.images.original;
      console.log(1);
      const img = document.createElement("img");
      img.src = url;
  
      document.body.append(img);
    } catch (error) {
      return error;
    }
  };
  getImg();
  