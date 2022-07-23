
import { useEffect, useState } from 'react';
import './App.css';
import Recepi from './Recepis';

function App() {

const apiId ="57bc937a"
const apiKey ="2af95566cbb9fa0d1298e8458417187f"
/* const simplRecvest= `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=apiId&app_key=apiKey` */
const[resepis,setResepi]=useState([])
const [serdg,setSerdg]=useState('')
const [query,setQuery]=useState('chicken')

useEffect(()=>{
getRecipec()
}, [query])


const getSerdg=(e)=>{
e.preventDefault();
setQuery(serdg)
setSerdg('')
}

const getRecipec = async()=>{
  const response =  await fetch(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`);
  const data = await response.json();
  console.log(data.hits);
 setResepi(data.hits);

}
  return (
    <div className="App">
      <form className='serchForm' onSubmit={getSerdg}>
        <input typeof='text' className='serchBar' value={serdg} onChange={(e)=>setSerdg(e.target.value)}></input>
        <button type='submit' className='serchButton'>Submit</button>
      </form>
      <div className='recepis'>
      {resepis.map(resepi=>(
        <Recepi 
        key={resepi.recipe.label}
        titil={resepi.recipe.label} cal={resepi.recipe.calories}
        img={resepi.recipe.image}
        ing={resepi.recipe.ingredientLines}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
