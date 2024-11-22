import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './componats/ProductList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
      <ProductList />
      </Container>
     
    </div>
  );
}

export default App;
