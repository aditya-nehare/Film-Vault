import Advertise from "./Advertise";
import Poster from "./Product_poster";

function Products() {
  return (
    <>
      <div className="p-2 space-y-1">
        <Advertise />
      </div>
      <div className="p-2 space-y-1">
        <Poster />
      </div>
    </>
  );
}

export default Products;
