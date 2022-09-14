import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../redux/reducers/productsReducer";
import Link from "next/link";
import QuickView from "./QuickView";


//Function to extract a the product ID from URL
const extractId = (url) => {
    let id = url.toString().split("/dp/").pop()
    const idOnly = id.slice(0, 10)

    return idOnly;
}

const AllProducts = ({ summer }) => {
    const dispatch = useDispatch();

    const [view, setView] = useState(false);

    const quickViewHandler = (id) => {

    }

  return (
    <div className=" 2xl:container 2xl:mx-auto">
        <ProductHeader />
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            
            {summer && summer.slice(0,20).map((product) => (
                        <div className=" relative ">
                        <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                          <p className="text-xs leading-3 text-gray-800">New</p>
                        </div>
                        <div className=" relative group">
                          <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                          <img
                            className=" w-full"
                            src={product.image}
                            alt="A girl Posing Img"
                          />
                          <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                            <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                              Add to bag
                            </button>
                            <button onClick={quickViewHandler} className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                              Quick View
                            </button>
                          </div>
                        </div>
                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                          {product.name}
                        </p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
                          ${product.price}
                        </p>
                        <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
  
                          {extractId(product.url)}
                        </p>
                      </div>
            ))}
        </div>

        <div className=" flex justify-center items-center">
          <Link href="/products">
            <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
              More Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const EachProduct = ({ category, price, image, title }) => {
    return (
        <div className=" relative ">
        <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
          <p className="text-xs leading-3 text-gray-800">New</p>
        </div>
        <div className=" relative group">
          <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
          <img
            className=" w-full"
            src="https://i.ibb.co/HqmJYgW/gs-Kd-Pc-Iye-Gg.png"
            alt="A girl Posing Img"
          />
          <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
            <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
              Add to bag
            </button>
            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
              Quick View
            </button>
          </div>
        </div>
        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
          {title}
        </p>
        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
          {price}
        </p>
        <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
          2 colours
        </p>
      </div>
    )
}

const ProductHeader = ({category}) => {
  return (
    <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
      <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
        Summer Fashion
      </p>
    </div>
  );
};

export default AllProducts;
