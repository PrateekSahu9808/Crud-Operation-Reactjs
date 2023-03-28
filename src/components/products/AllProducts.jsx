import React, { Fragment, useEffect, useState } from "react";
import Styles from "./_product.module.css";
import { faker } from '@faker-js/faker';
import { axiosInstance } from "./../../axiosInstance/AxiosInstance";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const AllProducts = () => {
  let [products, setProducts] = useState([]);
  let [isAuth,setAuth]=useState(true)
  let deleteProduct=async id=>{
   await axiosInstance.delete(`/products/${id}`)
   toast.success("Successfully product deleted")
   window.location.assign("/product-dashboard")
  
  }
  useEffect(() => {
    let fetchProducts = async () => {
      try {
        let { data } = await axiosInstance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={Styles.mainProducts}>
      <h1>List of Products</h1>
      <main className={Styles.listProducts}>
        {products.length > 0
          ? products?.map(product => {
              return (
                <Fragment key={product.id}>
                  <div className="content">
                    <figure>
                      <img src={faker.image.business()} alt="" />
                    </figure>
                    <h2>{product.title.slice(0, 20) + "..."}</h2>
                    <p>PRICE: &#8377;{product.price} </p>
                    <p>CATEGORY : {product.category}</p>
                    <p>{product.description.slice(0, 20) + "..."}</p>
                    <p>RATING: {product.rating}</p>
                    <footer>
                      <p className={Styles.link}>
                        <Link to={`/product-dashboard/${product.id}`}>
                          view
                        </Link>
                      </p>
                      {
                        isAuth===true&&(
                          <p className={Styles.link}>
                        <Link to={`/product-dashboard/update-product/${product.id}`}>
                          edit
                        </Link>
                      </p>
                        )
                      }
                        {
                        isAuth===true&&(
                          <p className={Styles.link}>
                        <button className={`${Styles.deleteBtn} btn btn-danger btn -sm `}
                        onClick={()=>deleteProduct(product.id)}
                        >Delete</button>
                      </p>
                        )
                      }
                      <p className={Styles.link}>
                        <a href="#">add to cart</a>
                      </p>
                    </footer>
                  </div>
                </Fragment>
              );
            })
          : "loading...."}
      </main>
    </div>
  );
};

export default AllProducts;
