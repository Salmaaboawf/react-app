import React, { useState, useEffect, useContext } from "react";
import 'flowbite';
import { TextInput } from "flowbite-react";
import axios from "axios";
import { UserContext } from "./Cotext";
import { useSelector, useDispatch } from 'react-redux'
// import { addtocart, removeFromCart } from './redux/slices/CounterSlice';
function Product() {
    const [user,setUser] = useContext(UserContext);    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");
   
    // const [user] = useContext(UserContext)

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => {
                setProducts(response.data.products);
                setFilteredProducts(response.data.products);
            });
    }, []);

    useEffect(() => {
        filterProducts();
    }, [ search]);

    function changeData(e) {
        setSearch(e.target.value);
    }

    function filterProducts() {
        let filtered = products.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase()) 
        );
        setFilteredProducts(filtered);
    }

    // function setCategoryFilter(category) {
    //  let   procategory=cat.set(products.category)
    //     setCategory(procategory);
    // }

    function sortProducts() {
        const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
        setFilteredProducts(sortedProducts);
    }

    return (
        <>
            <div>
                <h1>hello {user && user.name}</h1>
            </div>

            <div className="px-2" style={{ background: "#FAD1E8" }}>
                <div className="flex">
                    <TextInput type="text" name="s" className="input" onChange={changeData} />
                 
                    
                    <button onClick={sortProducts} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Sort by Price
                    </button>
                </div>
                <div className="flex flex-wrap gap-3">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ background: "#AC94FA" }}>
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={product.thumbnail} alt={product.title} />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className={`w-4 h-4 ${i < product.rating ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                    <a href="#"  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">أضف إلى السلة</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Product;
