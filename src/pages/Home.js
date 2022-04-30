import React, { useState, useEffect } from "react";
import Products from "../components/List/Products";
import SearchBar from "../components/SearchBar/SearchBar";
import Section from "../components/Section/Section";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState("");
  const [currProduct, setCurrProduct] = useState(null);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://europe-west1-g-hack-devoteam-4012.cloudfunctions.net/getAliments"
      )
      .then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    // console.warn("name", name);
    axios
      .get(
        `https://europe-west1-g-hack-devoteam-4012.cloudfunctions.net/function-1?aliment=${name}`
      )
      .then((res) => {
        let data = res.data ? res.data[0] : [];
        setCurrProduct(data);
        // console.warn("produit info", data);
        setCategories([
          {
            category: "Land use change",
            value: data.Land_use_change,
          },
          {
            category: "Animal feed",
            value: data.Animal_Feed,
          },
          {
            category: "Farm",
            value: data.Farm,
          },
          {
            category: "Processing",
            value: data.Processing,
          },
          {
            category: "Transport",
            value: data.Transport,
          },
          {
            category: "Packaging",
            value: data.Packging,
          },
          {
            category: "Retail",
            value: data.Retail,
          },
        ]);
      });
      setProduct("")
  }, [name]);

  const [categories, setCategories] = useState(null);

  const options = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];

//   console.log(currProduct);

  return (
    <div className="container mx-auto">
      <div className="wrapper-list">
        <SearchBar setValue={setProduct} />
        {product && (
          <Products data={data} search={product} setName={setName}></Products>
        )}
      </div>
      {currProduct && categories
        ? categories.map((oCategory, iIndex) => (
            <Section index={iIndex} information={oCategory}></Section>
          ))
        : product && <div className="flex justify-center">Loading...</div>}
    </div>
  );
};

export default Home;
