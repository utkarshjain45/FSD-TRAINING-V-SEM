import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../component/Product'

const ListProducts = () => {
  let[ProductList, setProductList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://683ab82843bb370a86738582.mockapi.io/e-commerce/productList"
    );
    const products = await response.json();
    setProductList(products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function filterButtonClick() {
    ProductList = ProductList.filter((product) => product.rating > 4);
    setProductList(ProductList);
    console.log(ProductList);
  }

  return (
    <div>
    <section className="products">
      <div className="products-grid">
        {ProductList.map((product) => (
            <ProductCard key = {product.id} productDetails={product} />
        ))}

      </div>
    </section>
    </div>
  )
}

export default ListProducts