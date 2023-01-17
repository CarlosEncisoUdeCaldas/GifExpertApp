import { api_key, limit} from "./const"


export const apiGifExpert = async ( category ) => {
   

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`
  
// es la misma sentencia de abajo
//   return fetch(url)
//   .then(res => res.json())
//   .then(result => result)
//   .catch(err => err.message)

  try {
        const res = await fetch(url)
        const result_1 = await res.json()
        return (result_1)
    } catch (err) {
        return err.message
    }
}
