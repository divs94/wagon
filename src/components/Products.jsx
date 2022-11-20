import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import product from "../api/product";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

export default function Products({ products }) {
  const [data, setData] = useState(product);
  const [filter, setFilter] = useState(data);

  const [loading, setLoading] = useState(false);
  let naviagte = useNavigate();

  // adding products to cart
  const dispatch = useDispatch();
  const addProduct = (products) => {
    dispatch(addCart(products));
  };

  // getting items data from "product api"
  useEffect(() => {
    const getProducts = () => {
      setData(data);
      if (!data) {
        setLoading(true);
      }
    };
    getProducts();
  }, []);

  // loader in case if delay in fetch data from api
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  // applying filters category wise of items
  const filterProduct = (cat) => {
    const updatedList = product.filter((x) => x.category === cat);
    console.log(updatedList);
    setFilter(updatedList);
  };

  // displaying item data
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's wear")}
          >
            Men's Wear
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("woman's wear")}
          >
            Woman's Wear
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewellery")}
          >
            Jewellery
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronic")}
          >
            Electronic
          </div>
        </div>

        {/* mapping data from product api */}
        {filter.map((products, id) => {
          // console.log("products are", products.id);
          return (
            <>
              <div key={products.id} className="col-md-3 m-3">
                <div class="card product_card h-100 text-center p-4">
                  <img
                    src={products.image}
                    class="card-img-top"
                    alt={products.title}
                    height="280px"
                    width="400px"
                  />
                  <div class="card-body d-flex flex-column justify-content-center text-center">
                    <h5 class="card-title display-6 lead text-dark fw-regular">
                      {products.title}
                    </h5>
                    <p class="card-text display-6 lead fw-bold">
                      ${products.price}
                    </p>
                    <p class="card-text text-secondary">{products.desc}</p>
                    <NavLink
                      onClick={() => addProduct(products)}
                      className="btn btn-outline-dark m-2"
                    >
                      Add to cart
                    </NavLink>
                    {/* perticulatr selected item shows on url */}
                    {/* <NavLink to={`/products/${products.id}`}  onClick={()=>addProduct(product)} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink> */}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container d-flex flex-column justify-content-start my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-4 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
}
