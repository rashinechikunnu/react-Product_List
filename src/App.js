import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './componats/ProductList';
import { Container } from 'react-bootstrap';
import UseEffect from './componats/useeffects/UseEffect';

function App() {

  const [posts,setPost] = useState([])

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPost(posts.splice(0,10)))

  }, [])

  


  return (
    <div className="App">
      <Container>
      {posts.map((postz)=>(
        <div key={postz.id}>
        <h1>{postz.title}</h1>
        <p>{postz.body}</p>
        </div>
      ))}
      {/* <ProductList /> */}
      {/* <UseEffect /> */}
      </Container>
     
    </div>
  );
}

export default App;
