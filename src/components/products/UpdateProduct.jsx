import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./_product.module.css";
import { axiosInstance } from "./../../axiosInstance/AxiosInstance";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
  let{id}=useParams();
  let navigate = useNavigate();
  let [state, setState] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    rating: 0,
    loading: false,
  });
  let { title, category, price, description, rating, loading } = state;
  useEffect(()=>{
    let fetchProduct = async ()=>{
      try {
        let{data}=await axiosInstance.get(`/products/${id}`)
        setState(data)
      } catch (error) {
        toast.error(error)
      }
    }
    fetchProduct()

  },[id])
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

   

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { title, category, description, rating, price };
      await axiosInstance.put(`/products/${id}`, payload);
      navigate("/product-dashboard");
      toast.success("successfully products update");
    } catch (error) {
      console.log(error);
    }
    setState({
      loading: false,
      title: "",
      description: "",
      category: "",
      rating: 0,
      price: "",
    });
  };
  return (
    <section id={Styles.form}>
      <article>
        <h2>Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className={Styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className={Styles.formControl}
              name="title"
              value={title}
              placeholder="enter title"
              required
              onChange={handleChange}
            />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className={Styles.formControl}
              name="price"
              value={price}
              placeholder="enter price"
              required
              onChange={handleChange}
            />
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="rating">rating</label>
            <input
              type="range"
              min={0}
              max={5}
              className={Styles.formControl}
              name="rating"
              value={rating}
              required
              onChange={handleChange}
            />
            <span>{rating}</span>
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="title">Title</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={handleChange}
            >
              <option value="laptop">Laptop</option>
              <option value="mobile">mobile</option>
              <option value="tablet">tablet</option>
              <option value="tv">tv</option>
              <option value="watch">smart watch</option>
            </select>
          </div>

          <div className={Styles.formGroup} id={Styles.textArea}>
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleChange}
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={description}
            ></textarea>
          </div>
          <div className={Styles.formGroup}>
            <button>{loading === true ? "loading..." : "Update product"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};



export default UpdateProduct;
