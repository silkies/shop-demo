import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css'
import RelatedProducts from './related-products/related-products';


function App() {
  
  return (
    <BrowserRouter>
      <Route path="/products/:id" component={RelatedProducts} />
    </BrowserRouter>
  );
}

export default App;
