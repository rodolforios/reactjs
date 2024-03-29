
import './App.css';
import { useState, useEffect } from "react";

//4 - custom hook
import { useFetch } from "./hooks/useFetch"

const url = "http://localhost:3000/products";
function App() {
  const [products, setProducts] = useState([]);

  const { data: items, httpConfig } = useFetch(url)


  const [name, setName] = useState([""]);
  const [price, setPrice] = useState("")



  // 1 - resgatando dados

  // useEffect(() => {

  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   fetchData()
  // }, []);



  // 2 -add de produtos

  const handleSubmit = async (e) => {
    e.preventDefault();

    const products = {
      name,
      price,
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(products),
    // });

    // 3-Carregamento dinamico

    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

  }

  // 5 - refatorando post

  httpConfig(products, "POST")

  setName("");
  setPrice("");



  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {items && items.map((product) => (

          <li key={product.id}> {product.name}- R$:{product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

          </label>

          <label>
            Preço:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />

            <input type="submit" value="criar" id="" />

          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
