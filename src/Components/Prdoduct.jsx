import "../assets/Products.css";
import data from "../assets/db.json";
console.log(data)
function Product( {index , productsData}) {

console.log( productsData)

  return (
    <>
      <div className="product-wrapper">
        <div className="product-header">{productsData.category}</div>
      </div>

      <div className="product-area">
        {productsData.Products.length > 0 ? (
          productsData.Products.map((product, index) => (
            <div key={index} className="product-item">
              <h2>{product.isim}</h2>
              <p>{product.açıklama}</p>
              <p>{product.fiyat} TL</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
}

export default Product;
