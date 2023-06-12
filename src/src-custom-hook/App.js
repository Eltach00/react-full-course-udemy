import React, { useEffect, useState } from "react";

import Products from "./components/Products/Products";
import NewProduct from "./components/NewProduct/NewProduct";
import useHTTP from "./hooks/useHTTP";

function App() {
  const [products, setProducts] = useState([]);

  const [isLoading, error, fetchProducts] = useHTTP(setProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  const productAddHandler = (product) => {
    setProducts((prevProducts) => prevProducts.concat(product));
  };

  return (
    <React.Fragment>
      <NewProduct onAddProduct={productAddHandler} />
      <Products
        items={products}
        loading={isLoading}
        error={error}
        onFetch={fetchProducts}
      />
    </React.Fragment>
  );
}

export default App;
