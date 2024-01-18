"use client";
import React, { useEffect, useState } from "react";
import { Select, Input, Button } from "antd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommonButton from "@/app/_components/_common-button/CommonButton";
import Cookies from "js-cookie";
import Image from "next/image";

const { Option } = Select;

const PizzaForm = () => {
  const [pizzaData, setPizzaData] = useState({
    name: "",
    description: "",
    image: "",
    toppings: [],
    prices: {
      small: "",
      medium: "",
      large: "",
      extralarge: "",
    },
    branch: JSON.parse(Cookies.get("adminData")).branchName,
  });

  const handleChange = (value, field) => {
    setPizzaData({ ...pizzaData, [field]: value });
  };

  const handlePriceChange = (value, size) => {
    setPizzaData({
      ...pizzaData,
      prices: {
        ...pizzaData.prices,
        [size]: value,
      },
    });
  };

  const handleSubmit = () => {
    // Validate the form data here if needed

    // Send data to the backend using Axios
    axios
      .post("https://jomaas-backend.onrender.com/api/v1/add-menu/pizza", pizzaData)
      .then((res) => {
        if (res.data.message === "Your Pizza Item Successfully Created!!") {
          location.reload();
          toast.success(res.data.message);
          setPizzaData({
            name: "",
            description: "",
            image: "",
            toppings: [],
            prices: {
              small: "",
              medium: "",
              large: "",
              extralarge: "",
            },
            branch: JSON.parse(Cookies.get("adminData")).branchName,
          });
        } else {
          toast.error(res.data.message);
        }
        // Clear all fields after submission
      })
      .catch((error) => {
        console.error("Error adding pizza:", error);
        toast.error("Error adding pizza. Please try again.");
      });
  };
  //   delete product function
  let handleDelete = (_id) => {
    axios
      .post("https://jomaas-backend.onrender.com/api/v1/add-menu/deletepizza", {
        id: _id,
      })
      .then(() => {
        location.reload();
      });
  };

  //   get all pizza
  let [allPizza, setAllPizza] = useState([]);
  useEffect(() => {
    axios.get("https://jomaas-backend.onrender.com/api/v1/add-menu/getpizza").then((res) => {
      setAllPizza(res.data);
    });
  }, []);

  //   topping array
  const toppings = [
    "HAM",
    "SALAMI",
    "PEPPERONI",
    "BACON",
    "GROUND BEEF",
    "SAUSAGE",
    "EXTRA CHEESE",
    "FETA",
    "ROASTED GARLIC",
    "CHEDDAR",
    "PINEAPPLE",
    "GREEN PEPPERS",
    "FRESH TOMATOES",
    "COOKED TOMATOES",
    "HOT BANANA PEPPERS",
    "ONIONS",
    "RED ONIONS",
    "BLACK OLIVES",
    "GREEN OLIVES",
    "MUSHROOM",
    "SPINACH",
    "JALAPENO",
    "SHRIMP",
    "CRAB",
    "CHICKEN",
    "DONAIR MEAT",
    "BBQ Sause",
    "Chicken Breast",
  ];

  //   date format function
  const formatDateTime = (createdAt) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(createdAt).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full flex flex-col gap-5 mx-auto mt-10">
      <ToastContainer />
      <h3 className="text-center uppercase font-semibold text-p-brown text-[18px] py-4">
        Add your pizza items
      </h3>
      <Input
        placeholder="Pizza Name"
        value={pizzaData.name}
        onChange={(e) => handleChange(e.target.value, "name")}
      />
      <Input.TextArea
        placeholder="Pizza Description"
        value={pizzaData.description}
        onChange={(e) => handleChange(e.target.value, "description")}
      />
      <Input
        placeholder="Image URL"
        value={pizzaData.image}
        onChange={(e) => handleChange(e.target.value, "image")}
      />
      <Select
        mode="tags"
        style={{ width: "100%" }}
        placeholder="Select Toppings"
        onChange={(value) => handleChange(value, "toppings")}
        value={pizzaData.toppings}
      >
        {toppings.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
      <p className="text-p-red">Add Prices</p>
      <div className="flex flex-wrap gap-1">
        <Input
          placeholder="Small Pizza Price"
          type="number"
          className="w-[49%]"
          value={pizzaData.prices.small}
          onChange={(e) => handlePriceChange(e.target.value, "small")}
        />
        <Input
          placeholder="Medium Pizza Price"
          type="number"
          className="w-[49%]"
          value={pizzaData.prices.medium}
          onChange={(e) => handlePriceChange(e.target.value, "medium")}
        />
        <Input
          placeholder="Large Pizza Price"
          type="number"
          className="w-[49%]"
          value={pizzaData.prices.large}
          onChange={(e) => handlePriceChange(e.target.value, "large")}
        />
        <Input
          placeholder="Extra Large Pizza Price"
          type="number"
          className="w-[49%]"
          value={pizzaData.prices.extralarge}
          onChange={(e) => handlePriceChange(e.target.value, "extralarge")}
        />
      </div>

      <div className="flex justify-center">
        <CommonButton title={"Submit"} onClick={handleSubmit}>
          Upload Pizza
        </CommonButton>
      </div>
      <div className="mt-10 w-full">
        <h3 className="text-center uppercase font-semibold text-p-brown text-[18px] py-4">
          manage your all pizza items from here
        </h3>
        <div className="mt-5 w-full flex justify-center flex-wrap flex-col-reverse md:flex-row gap-5">
          {allPizza.map(
            (item, index) =>
              item.branch ===
                JSON.parse(Cookies.get("adminData")).branchName && (
                <div className="w-full p-3 md:w-[32%] bg-p-yellow flex flex-col gap-y-3">
                  <img src={item.image} className="w-full h-auto" />
                  <h3 className="text-[20px] font-bold text-p-red">
                    {index + 1}
                  </h3>
                  <h4 className="text-[20px] text-p-red font-semibold capitalize ">
                    {item.name}
                  </h4>
                  <p className="text-[12px] text-p-brown">{item.description}</p>
                  <div className="">
                    <h4 className="text-[17px] mb-2 text-p-red font-semibold capitalize ">
                      Toppings
                    </h4>
                    <ul className="flex  gap-3">
                      {item.toppings.map((item, index) => (
                        <li className="p-1 rounded-lg text-[10px] text-white bg-green-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="">
                    <h4 className="text-[17px]  text-p-red font-semibold capitalize ">
                      Prices (CAD)
                    </h4>
                    <ul>
                      <li className="text-p-brown">
                        <span className="font-semibold">Small:</span>{" "}
                        {item.prices.small}
                      </li>
                      <li className="text-p-brown">
                        <span className="font-semibold">Medium:</span>{" "}
                        {item.prices.medium}
                      </li>
                      <li className="text-p-brown">
                        <span className="font-semibold">Large:</span>{" "}
                        {item.prices.large}
                      </li>
                      <li className="text-p-brown">
                        <span className="font-semibold">Extralarge:</span>{" "}
                        {item.prices.extralarge}
                      </li>
                    </ul>
                  </div>
                  <div className="text-end">
                    <small className="font-semibold text-p-brown">
                      {formatDateTime(item.createdAt)}
                    </small>
                  </div>
                  <div className="flex justify-center gap-3 mt-5">
                    <div className="p-2 rounded-xl text-white cursor-pointer bg-green-700">
                      Edit
                    </div>
                    <div
                      onClick={() => handleDelete(item._id)}
                      className="p-2 rounded-xl text-white cursor-pointer bg-red-500"
                    >
                      Delete
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaForm;
