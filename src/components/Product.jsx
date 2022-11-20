import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import product from "../api/product";
import Skeleton from "react-loading-skeleton";

export default function Product() {
  const [data, setData] = useState(product);
  const [selectedProduct, setSelectedProduct] = useState(data);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();
  // console.log(id);
  useEffect(() => {
    const getProducts = () => {
      setSelectedProduct(data);
      if (!data) {
        setLoading(true);
      }
    };
    getProducts();
  }, [id]);

  // to get item detail 
  // const updatedData = (id)=> { selectedProduct.find((x,id)=>x.id===id);

  //   setSelectedProduct(data);
  //     console.log("updated data is",updatedData);
  //   }
  // return(
  //     <>
  //   <h1 key={id}>Product title is: {selectedProduct.id}</h1>

  //     </>
  // )

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {selectedProduct.map((products, data, id) => {
          // console.log("products are", products.id);
          return (
            <>
              <div
                key={product.id}
                className="col-md-4 d-flex flex-column justify-content-center"
              >
                <img
                  className="col-md-6"
                  src={products.image}
                  alt={products.title}
                  height="400px"
                  width="400px"
                />
              </div>
              <div className="col-md-6">
                <h4>{products.category}</h4>
                <h1 className="display-4">{products.title}</h1>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="row d-flex justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </>
  );
}
