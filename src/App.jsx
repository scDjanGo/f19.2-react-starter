import { useEffect } from "react"




const BASE_URL = `https://69f8242bdd0c226688ee2bc2.mockapi.io/products`




function App() {



  useEffect(() => {


    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
    })
    .catch(err => {
      console.log(err)
    })


    console.log("mount");
    
  }, [])




  return (
    <div>App</div>
  )
}

export default App