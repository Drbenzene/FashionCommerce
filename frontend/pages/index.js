import styles from "../styles/Home.module.css";
import Header from "../components/Layouts/Header";
import Hero from "../components/Layouts/Hero";
import Promo from "../components/Layouts/Promo";
import BestSeller from "../components/Layouts/BestSellers";
import Category from "../components/Layouts/Category";
import AllProducts from "../components/Layouts/AllProducts";
import Featured from "../components/Layouts/Featured";
import Social from "../components/Layouts/Social";
import NewsLetter from "../components/Layouts/NewsLetter";
import Footer from "../components/Layouts/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsReducer, { fetchProduct, fetchProductByCategory } from "../redux/reducers/productsReducer";
import { FidgetSpinner } from "react-loader-spinner";
import ProductHeader  from "../components/Layouts/AllProducts";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("trending");
  const { products, loading, error, success, product, category } = useSelector(
    (state) => state.products
  );
  const [summer, setSummer] = useState([]);

  useEffect(() => {
    dispatch(fetchProduct(query));
    dispatch(fetchProductByCategory("fashion"));
  }, []);





  return (
    <>
      <Header />
      <Hero />
      <Category />

      {loading ? (
        <div className="flex row items-center justify-center">
          <h2 className="text-lg font-bold">
            Loading Some Of Our Best Selling Products
          </h2>
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["#ff0000", "#00ff00", "#0000ff"]}
            backgroundColor="#F4442E"
          />{" "}
        </div>
      ) : (
        <BestSeller products={products.results} />
      )}

      <Featured />

      <AllProducts summer={category} />) 


      <Social />
      <Footer />
    </>
  );
}
