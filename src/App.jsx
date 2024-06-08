
import HeaderArea from "./Components/HeaderArea";
import Prdoduct from "./Components/Prdoduct";
import data from "./assets/db.json";

function App() {


  return (
    <div>
      <HeaderArea />
      {data.ürünler.map((productsData, index) => (
        <Prdoduct productsData={productsData} index ={index}  key={index}></Prdoduct>
      ))}
    </div>
  );
}

export default App;
