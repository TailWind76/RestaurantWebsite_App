import "./App.css";
import { useEffect, useState } from "react";
import logo from "./Components/icons/webLogo.svg";
import axios from "axios";
import search from "./Components/icons/headerNavBar/search.svg";
import cart from "./Components/icons/headerNavBar/cart.svg";
import bill from "./Components/icons/headerNavBar/bill.svg";
import table from "./Components/icons/headerNavBar/table.svg";
import plus from "./Components/icons/plus.svg";
import close from "./Components/icons/close.svg";
import BeefsteakOrder from "./Components/js/BeefsteakOrder";
import SushiOrder from "./Components/js/SushiOrder";
import SoupOrder from "./Components/js/SoupOrder";
import RiceBowlOrder from "./Components/js/RiceBowlOrder";
import PorkChickenOrder from "./Components/js/PorkChickenOrder";
import NoodlesOrder from "./Components/js/NoodlesOrder";
import DrinkOrder from "./Components/js/DrinkOrder";
import CartPage from "./Components/js/CartPage";
import OrderPage from "./Components/js/OrderPage";
import TablePopup from "./Components/js/TablePopup";
import MobileMenu from "./Components/mobile/menu";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("Beefsteak");
  const [isBlockOpen, setIsBlockOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(true);
  const [orderOpen, setOrderOpen] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [productPage, setProductPage] = useState("1");
  const [tablePopup,setTablePopup]=useState()
  const [mobileForm,setMobileForm]=useState(false)
  const [selectedTable,setSelectedTable]=useState('')
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    sauce: "",
    doneness: "",
    sushiSauce: "",
    Size: "",
    Ingridients: "",
  });

  const [orderList,setOrderList] =useState([])
  const [ordering, setOrder] = useState([]);


  const [closePage, setClosePage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [mobileMenu,setMobileMenu]=useState()
  const ProductData = data.filter(
    (item) => item.id === parseInt(productPage, 10),
  );

  const increaseQnt = () => {
    setProductQuantity(productQuantity + 1);
  };
  const reduceQnt = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const closePageHandler = () => {
    setClosePage(!closePage);
    setSelectedImage(null);
    setProductQuantity(1);

    setSelectedOptions({
      sauce: "",
      doneness: "",
      sushiSauce: "",
      Size: "small",
      Ingridients: "",
    });
  };

  const openPageHandler = (ProductId) => {
    setClosePage(true);
    setProductPage(ProductId);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredProducts = data.filter((item) =>
    item.ProductName.toLowerCase().includes(filterText.toLowerCase()),
  );

  const openBlock = () => {
    setIsBlockOpen(true);
    setMobileForm(true)
  };

  const closeBlock = () => {
    setIsBlockOpen(false);
    setMobileForm(false)
  };

  useEffect(() => {
    const url = "/RestaurantWebsite_App/products.json";
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredData = data.filter((item) => item.ProductCategory == category);

  return (
    <>
        <TablePopup
        setTablePopup={setTablePopup}
        tablePopup={tablePopup}
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
        />
      <section className="nav-bar">
        <div className="logo">
          <span className="logo-image">
            {" "}
            <img src={logo}></img>{" "}
          </span>

          <p>Sakura Breeze</p>
        </div>

        <div className="nav-bar_items">
          <div
            onClick={() => setCategory("Beefsteak")}
            className={
              category === "Beefsteak"
                ? "nav-bar_item nav-active"
                : "nav-bar_item"
            }
          >
            {" "}
            <svg
              width="800px"
              height="800px"
              fill="#000000"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m241.9 20.47s-8.8 4.49-17.7 11.17c-4.4 3.33-8.9 7.22-12.6 11.86s-7 10.4-6.5 17.52c0.5 8.44 6.3 14.78 12.1 18.4 5.9 3.63 12.2 5.75 18.1 7.83s11.3 4.13 14.4 6.1c3 1.97 3.3 2.49 3.4 4.1 0 0-0.4 1.52-2.5 3.85-2.1 2.2-5.6 4.9-9.2 7.2-7.3 4.5-14.8 7.6-14.8 7.6l6.8 16.6s8.7-3.5 17.5-9.1c4.4-2.7 9-6 12.8-10.1 3.9-4.2 7.4-9.6 7.2-16.53-0.2-8.46-5.9-15.06-11.6-18.74-5.8-3.68-12.1-5.8-18-7.88-5.9-2.09-11.4-4.14-14.6-6.15s-3.7-2.78-3.8-4.38c0-0.41 0.5-2.41 2.7-5.18s5.7-5.94 9.4-8.72c7.4-5.57 15.1-9.55 15.1-9.55zm-112 18s-8.8 4.49-17.7 11.17c-4.4 3.33-8.9 7.22-12.6 11.86s-7 10.4-6.5 17.52c0.5 8.44 6.3 14.78 12.1 18.4 5.9 3.58 12.2 5.78 18.1 7.78 5.9 2.1 11.3 4.1 14.4 6.1 3 2 3.3 2.5 3.4 4.1v0.1s-0.4 1.5-2.5 3.8c-2.1 2.2-5.6 4.9-9.2 7.2-7.3 4.5-14.8 7.6-14.8 7.6l6.8 16.6s8.7-3.5 17.5-9.1c4.4-2.7 9-6 12.8-10.1 3.9-4.2 7.4-9.6 7.2-16.5-0.2-8.5-5.9-15.06-11.6-18.74-5.8-3.68-12.1-5.8-18-7.88-5.9-2.09-11.4-4.14-14.6-6.15s-3.7-2.78-3.8-4.38c0-0.41 0.5-2.41 2.7-5.18s5.7-5.94 9.4-8.72c7.4-5.57 15.1-9.55 15.1-9.55zm218 0s-8.8 4.49-17.7 11.17c-4.4 3.33-8.9 7.22-12.6 11.86s-7 10.4-6.5 17.52c0.5 8.44 6.3 14.78 12.1 18.4 5.9 3.58 12.2 5.78 18.1 7.78 5.9 2.1 11.3 4.1 14.4 6.1 3 2 3.3 2.5 3.4 4.1v0.1s-0.4 1.5-2.5 3.8c-2.1 2.2-5.6 4.9-9.2 7.2-7.3 4.5-14.8 7.6-14.8 7.6l6.8 16.6s8.7-3.5 17.5-9.1c4.4-2.7 9-6 12.8-10.1 3.9-4.2 7.4-9.6 7.2-16.5-0.2-8.5-5.9-15.06-11.6-18.74-5.8-3.68-12.1-5.8-18-7.88-5.9-2.09-11.4-4.14-14.6-6.15s-3.7-2.78-3.8-4.38c0-0.41 0.5-2.41 2.7-5.18s5.7-5.94 9.4-8.72c7.4-5.57 15.1-9.55 15.1-9.55zm-301.9 131.03v17.8h438v-17.8zm1.51 35.8c5.63 58.2 65.09 142.2 182.49 142.2s176.9-84 182.5-142.2zm74.79 133.6-15.6 72.8c7.1 0.7 13.9 3 19.8 6.4l15-69.9c-6.7-2.8-13.1-5.9-19.2-9.3zm215.4 0c-6.1 3.4-12.5 6.5-19.2 9.3l30.7 143.1c5-0.2 13.4-0.5 16-1.4 1.8-0.6 2.6-1.2 3-1.7 0.3-0.5 0.7-1.3 0.8-3.2zm-235.7 90.4c-17.3 0-31.05 13.8-31.05 31.1s13.75 31.1 31.05 31.1 31.1-13.8 31.1-31.1-13.8-31.1-31.1-31.1zm47.7 20.2c0.8 3.5 1.2 7.2 1.2 10.9 0 2.3-0.2 4.6-0.5 6.9h175.4l-3.8-17.8z"
                fill="#4c4d4e"
              />
            </svg>
            <p>BBQ and Beefsteak</p>
          </div>

          <div
            onClick={() => setCategory("Sushi")}
            className={
              category === "Sushi" ? "nav-bar_item nav-active" : "nav-bar_item"
            }
          >
            <svg
              width="800px"
              height="800px"
              fill="#4c4d4e"
              version="1.1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m10 18h4c0.6 0 1-0.4 1-1v-4c0-0.6-0.4-1-1-1h-4c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1z" />
              <path d="m20 2c-5.6 0-10 2.6-10 6 0 0.4 0.1 0.7 0.2 1.1-4.7 0.5-8.2 2.9-8.2 5.9v9c0 3.4 4.4 6 10 6s10-2.6 10-6v-1.1c4.7-0.5 8-2.9 8-5.9v-9c0-3.4-4.4-6-10-6zm0 2c4.7 0 8 2.1 8 4 0 1.8-2.9 3.8-7.3 4-0.3-0.4-0.7-0.7-1.2-1h2.5c0.6 0 1-0.4 1-1v-4c0-0.6-0.4-1-1-1h-4c-0.6 0-1 0.4-1 1v3.8c-1.4-0.5-3-0.8-4.7-0.8-0.2-0.3-0.3-0.7-0.3-1 0-1.9 3.3-4 8-4zm-8 7c4.7 0 8 2.1 8 4s-3.3 4-8 4-8-2.1-8-4 3.3-4 8-4z" />
            </svg>

            <p>Sushi</p>
          </div>

          <div
            onClick={() => setCategory("Noodles")}
            className={
              category === "Noodles"
                ? "nav-bar_item nav-active"
                : "nav-bar_item"
            }
          >
            <svg
              width="800px"
              height="800px"
              fill="#000000"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="cls-1"
                d="M1.52,12a9.55,9.55,0,0,0,5.4,8.59l.33,1.91h7.64l.33-1.91a9.73,9.73,0,0,0,2.6-1.84A9.56,9.56,0,0,0,20.61,12Z"
              />
              <line class="cls-1" x1="4.39" x2="23.48" y1="1.5" y2="1.5" />
              <line class="cls-1" x1="4.39" x2="23.48" y1="5.32" y2="5.32" />
              <line class="cls-1" x1="6.3" x2="6.3" y1="3.41" y2="12" />
              <line class="cls-1" x1="9.16" x2="9.16" y1="3.41" y2="12" />
              <line class="cls-1" x1="12.02" x2="12.02" y1="3.41" y2="12" />
            </svg>

            <p>Noodles</p>
          </div>

          <div
            onClick={() => setCategory("Chicken&Pork")}
            className={
              category === "Chicken&Pork"
                ? "nav-bar_item nav-active"
                : "nav-bar_item"
            }
          >
            <svg
              width="800px"
              height="800px"
              fill="#4c4d4e"
              version="1.1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M28.76,3.24C28.25,1.91,26.96,1,25.5,1C23.57,1,22,2.57,22,4.5c0,0.58,0.16,1.15,0.43,1.65l-2.86,2.86 C14.82,7.4,7.06,10.8,3.93,13.93c-3.9,3.9-3.9,10.24,0,14.14C5.88,30.02,8.44,31,11,31s5.12-0.98,7.07-2.92 c3.13-3.13,6.53-10.89,4.91-15.64l2.86-2.86C26.35,9.84,26.92,10,27.5,10c1.93,0,3.5-1.57,3.5-3.5C31,5.04,30.09,3.75,28.76,3.24z" />
            </svg>

            <p>Pork & Chicken</p>
          </div>

          <div
            onClick={() => setCategory("RiceBowl")}
            className={
              category === "RiceBowl"
                ? "nav-bar_item nav-active"
                : "nav-bar_item"
            }
          >
            <svg
              width="800px"
              height="800px"
              fill="#4c4d4e"
              version="1.1"
              viewBox="0 0 351.44 351.44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m348.54 51.96c-3.996-2.768-10.646-0.22-14.851 5.691l-103.37 145.32s-0.54 0.918-1.54 0.918h-7.094c-1.781 0-1.239-1.497-1.239-1.497l63.843-185.09c2.356-6.836 0.521-13.637-4.103-15.188-4.623-1.553-10.28 2.729-12.641 9.566l-65.778 190.71s-0.646 1.498-2.396 1.498h-189.17c-8.25 0-12.344 6.206-9.097 13.79l50.578 118.16c3.246 7.584 12.652 13.79 20.902 13.79h174.18c8.25 0 17.655-6.206 20.902-13.79l50.578-118.16c3.246-7.584-0.848-13.79-9.098-13.79h-56.972c-0.958 0-0.309-0.854-0.309-0.854l96.284-135.36c4.212-5.912 4.38-12.947 0.382-15.716z" />{" "}
              <path d="m218.68 119.53 3.431-9.94c0.518-1.369-0.573-2.056-1.088-2.438-9.38-6.991-20.945-11.116-33.272-11.116-20.872 0-39.674 11.455-49.309 29.607-4.641-1.215-9.423-1.828-14.276-1.828-20.791 0-39.815 11.59-49.551 29.525-7.438-4.85-16.134-7.458-25.157-7.458-24.916 0-45.285 19.839-46.14 44.549-0.019 0.537-1e-3 1.618 1.018 1.618h10c1.084 0 0.962-0.855 0.978-1.28 0.676-18.248 15.733-32.887 34.145-32.887 8.706 0 16.993 3.295 23.361 9.248 1.172 1.096 3.184 2.966 6.184 1.716 2.09-0.869 3.037-2.78 3.552-4.02 7.093-17.078 23.111-29.013 41.611-29.013 5.29 0 10.521 0.784 15.391 2.747 1.091 0.438 2.946 1.284 4.696 0.284 1.923-1.099 2.497-2.548 2.936-3.629 6.714-16.545 22.715-27.183 40.562-27.183 10.694 0 20.661 3.952 28.383 10.527 0.749 0.644 2.241 1.849 2.545 0.971z" />{" "}
              <path d="m255.14 135.68-3.523 10.223c-0.3 0.813 0.432 0.854 0.812 0.813 1.379-0.147 2.79-0.011 4.17-0.257 0.363-0.064 0.52-0.211 0.769-0.48l7.548-10.611c0.217-0.271-0.293-0.441-0.57-0.477-2.312-0.285-4.665-0.441-7.055-0.441-0.199 0-0.399 1e-3 -0.6 4e-3 -0.381 2e-3 -1.063-7e-3 -1.551 1.226z" />{" "}
              <path d="m299.64 154.89-5.982 8.411c-0.523 0.589 0.082 1.372 0.35 1.734 5.235 7.097 8.467 15.759 8.848 25.143 0.025 0.621 0.321 1.874 1.321 1.874h9.583c1.5 0 1.125-1.141 1.108-1.707-0.396-13.479-5.452-25.8-13.601-35.432-0.297-0.349-1.052-0.94-1.627-0.023z" />
            </svg>

            <p>Rice Bowl</p>
          </div>

          <div
            onClick={() => setCategory("Soup")}
            className={
              category === "Soup" ? "nav-bar_item nav-active" : "nav-bar_item"
            }
          >
            <svg
              fill="#4c4d4e"
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M488.727,181.631H342.035l149.318-87.158c11.1-6.479,14.846-20.73,8.367-31.831s-20.736-14.842-31.831-8.367 L249.702,181.631H23.273C10.42,181.631,0,192.051,0,204.904c0,35.817,7.405,69.931,20.747,100.914 c0.403,1.131,0.867,2.231,1.434,3.272c21.079,47.118,55.993,86.739,99.547,113.681c-3.348,4.031-5.364,9.208-5.364,14.857 c0,12.853,10.42,23.273,23.273,23.273h232.727c12.853,0,23.273-10.42,23.273-23.273c0-5.651-2.015-10.828-5.364-14.857 c43.594-26.964,78.53-66.633,99.603-113.81c0.524-0.976,0.959-2.005,1.341-3.06C504.579,274.897,512,240.753,512,204.904 C512,192.051,501.58,181.631,488.727,181.631z M256,414.358c-72.467,0-136.453-36.997-174.072-93.091h348.146 C392.453,377.361,328.467,414.358,256,414.358z M453.483,274.722H58.517c-5.257-14.825-8.893-30.41-10.687-46.544h208.05v0 c0.047,0,0.095,0.005,0.141,0.005c0.047,0,0.095-0.005,0.141-0.005H464.17C462.378,244.312,458.74,259.897,453.483,274.722z" />{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <p>Soup</p>
          </div>

          <div
            onClick={() => setCategory("Drink")}
            className={
              category === "Drink" ? "nav-bar_item nav-active" : "nav-bar_item"
            }
          >
            <svg
              width="800px"
              height="800px"
              viewBox="-4 0 20 20"
              version="1.1"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>drink [#684]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-224.000000, -5159.000000)"
                    fill="#4c4d4e"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M173.649,5009.981 C171.972,5009.821 170.67,5008.571 170.222,5007 L177.902,5007 C177.425,5008.842 175.68,5010.175 173.649,5009.981 M171.042,5001 L177.042,5001 C177.594,5001 178,5001.447 178,5002 L178,5005 L170,5005 L170,5002 C170,5001.447 170.49,5001 171.042,5001 M178.042,4999 L170.042,4999 C168.937,4999 168,4999.895 168,5001 L168,5006 C168,5008.972 170,5011.433 173,5011.91 L173,5017 L172.042,5017 C171.49,5017 171.042,5017.447 171.042,5018 C171.042,5018.552 171.49,5019 172.042,5019 L176.042,5019 C176.594,5019 177.042,5018.552 177.042,5018 C177.042,5017.447 176.594,5017 176.042,5017 L175,5017 L175,5011.91 C178,5011.433 180,5008.972 180,5006 L180,5001 C180,4999.895 179.146,4999 178.042,4999"
                        id="drink-[#684]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>

            <p>Drink</p>
          </div>
        </div>
      </section>

      <section className="main-content">
        <CartPage
          ordering={ordering}
          cartOpen={cartOpen}
          setOrder={setOrder}
          setCartOpen={setCartOpen}
          openPageHandler={openPageHandler}
          data={data}
          orderList={orderList}
          setOrderList={setOrderList}
        />


        <OrderPage
        ordering={ordering}
        orderOpen={orderOpen}
        setOrderOpen={setOrderOpen}
        orderList={orderList}
        setOrderList={setOrderList}
        />

        

        {ProductData.map((item) => (
          <section
            className={closePage ? "product-page closed" : "product-page"}
          >
            <span onClick={closePageHandler} className="close-product-page">
              <img src={close}></img>
            </span>

            <div className="product-gallery">
              <div className="imageFrames">
                <img
                  src={selectedImage || item.ProductGallery[0].image1}
                  className="big_imageFrame"
                  alt="Product Image 1"
                />
                <div className="small_imageFrame">
                  {item.ProductGallery[0].image2 &&
                    item.ProductGallery[0].image3 &&
                    item.ProductGallery[0].image4 &&
                    [
                      item.ProductGallery[0].image2,
                      item.ProductGallery[0].image3,
                      item.ProductGallery[0].image4,
                    ].map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Product Image ${index + 2}`}
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                </div>
              </div>
            </div>

            <div className="product-order">
              <h2 className="product-order_name">{item.ProductName}</h2>
              <p className="product-order_item-price">{item.ProductPrice}</p>

              {item.ProductCategory === "Beefsteak" ? (
                <BeefsteakOrder
                  selectedOptions={selectedOptions}
                  handleSauceOption={(sauce) =>
                    setSelectedOptions({ ...selectedOptions, sauce })
                  }
                  handleDonenessOption={(doneness) =>
                    setSelectedOptions({ ...selectedOptions, doneness })
                  }
                />
              ) : item.ProductCategory === "Sushi" ? (
                <SushiOrder
                  selectedOptions={selectedOptions}
                  handleSushiSauceOption={(sushiSauce) =>
                  setSelectedOptions({ ...selectedOptions, sushiSauce })
                  }
                />
              ) : item.ProductCategory === "Soup" ? (
                <SoupOrder
                  selectedOptions={selectedOptions}
                  handleSize={(Size) =>
                    setSelectedOptions({ ...selectedOptions, Size })
                  }
                  handleIngridients={(Ingridients) =>
                    setSelectedOptions({ ...selectedOptions, Ingridients })
                  }
                />
              ) : item.ProductCategory === "RiceBowl" ? (
                <RiceBowlOrder
                  selectedOptions={selectedOptions}
                  handleSize={(Size) =>
                    setSelectedOptions({ ...selectedOptions, Size })
                  }
                  handleIngridients={(Ingridients) =>
                    setSelectedOptions({ ...selectedOptions, Ingridients })
                  }
                  handleSauce={(sauce) =>
                    setSelectedOptions({ ...selectedOptions, sauce })
                  }
                />
              ) : item.ProductCategory === "Chicken&Pork" ? (
                <PorkChickenOrder
                  selectedOptions={selectedOptions}
                  handleSauceOption={(sauce) =>
                    setSelectedOptions({ ...selectedOptions, sauce })
                  }
                  handleDonenessOption={(doneness) =>
                    setSelectedOptions({ ...selectedOptions, doneness })
                  }
                />
              ) : item.ProductCategory === "Noodles" ? (
                <NoodlesOrder
                  selectedOptions={selectedOptions}
                  handleSize={(Size) =>
                    setSelectedOptions({ ...selectedOptions, Size })
                  }
                  handleIngridients={(Ingridients) =>
                    setSelectedOptions({ ...selectedOptions, Ingridients })
                  }
                />
              ) : item.ProductCategory === "Drink" ? (
                <DrinkOrder
                  selectedOptions={selectedOptions}
                  handleSize={(Size) =>
                    setSelectedOptions({ ...selectedOptions, Size })
                  }
                  handleIngridients={(Ingridients) =>
                    setSelectedOptions({ ...selectedOptions, Ingridients })
                  }
                  handleSauce={(sauce) =>
                    setSelectedOptions({ ...selectedOptions, sauce })
                  }
                />
              ) : (
                <p></p>
              )}

              <div className="product-quantity">
                <p className="product-quantity_titile">Choose the quantity</p>

                <div className="calculate-btns">
                  <span onClick={reduceQnt} className="calculate-btn">
                    {" "}
                    <p>-</p>
                  </span>{" "}
                  <span className="quantity">{productQuantity}</span>{" "}
                  <span onClick={increaseQnt} className="calculate-btn">
                    <p>+</p>
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  setOrder([
                    ...ordering,
                    {
                      ProductName: item.ProductName,
                      ProductPrice: parseFloat(item.ProductPrice) * productQuantity,
                      ProductImage: item.ProductGallery[0].image1,
                      id: Date.now() + Math.random(),
                      productQuantity,
                      selectedOptions,
                    },
                  ])
                }
                className="add-cart-btn"
              >
                {" "}
                <img src={cart}></img>
                <p>Add To cart</p>
              </button>
            </div>
          </section>
        ))}
        <div className="header-nav">
          <form className= {mobileForm? "search-bar form-mobile" : "search-bar"}>
            <img src={search}></img>
            <input
              type="text"
              name="menu-search"
              placeholder="Enter a dishes"
              onFocus={openBlock}
              onBlur={closeBlock}
              value={filterText}
              onChange={handleFilterChange}
            ></input>

            <div 
            className={`${isBlockOpen ? "block opens" : "block"}`}>
              {filteredProducts.map((product) => (
                
                <div 
                className="filter-result" 
              onClick={() => {
                openPageHandler(product.id)
                setCartOpen(true)
                setSelectedOptions({
                  sauce: "",
                  doneness: "",
                  sushiSauce: "",
                  Size: "small",
                  Ingridients: "",
                });

              }}
            
              >
                  <img
                   
                    src={product.ProductGallery.map(
                      (preview) => preview.image1,
                    )}
                  />{" "}
                  <p>  {product.ProductName} </p>
                </div>
              ))}
            </div>
          </form>

          <div className= { mobileForm?"orderInfo-bar closed-info":"orderInfo-bar"}>

            <div
              onClick={() => {
                setCartOpen(!cartOpen);
                setOrderOpen(true)}}
              className="cart orderButton"
            >
             
              <img src={cart}></img>{" "}
              { ordering.length>0? <span className="orderButton-count"> <p> {ordering.length>99? '99+':ordering.length}</p> </span> : ''}
            </div>

            <div
             onClick={() => {
              setOrderOpen(!orderOpen);
              setCartOpen(true) }}
            className="bills orderButton">
       
              <img src={bill}></img>
              { orderList.length>0? <span className="orderButton-count"> <p> {orderList.length>99? '99+':orderList.length}</p> </span> : ''}
            </div>

            <div 
              onClick={()=>setTablePopup(!tablePopup)}
            className="table">
            
              <img src={table}></img> <p> { selectedTable? selectedTable:`Select a table` } </p>
          
            </div>

            <div
            onClick={()=>setMobileMenu(!mobileMenu)}
            className="mobile-menu">
              <span></span>
              <span></span>
              <span></span>
               </div>

            <section className= { mobileMenu?"mobile-menu__block menu-open": "mobile-menu__block"}>
                <span
                onClick={()=>setMobileMenu(!mobileMenu)}
                className="menu-close-btn">
                  <img src={close}></img>

                </span>

                <MobileMenu
                setCategory={setCategory}
                category={category}
                setTablePopup={setTablePopup}
                tablePopup={tablePopup}
                table={table}
                selectedTable={selectedTable}
                
                />
                
              


            </section>



          </div>
        </div>

        <section className="main-content_dishes">
          <div className="banner"></div>

          <h2 className="food-category">{category}</h2>

          <div className="food-content">
            {filteredData.map((item) => (
              <div
                className="food-content--item"
                onClick={() => openPageHandler(item.id)}
              >
                <img
                  className="food-content_img"
                  src={item.ProductGallery.map((preview) => preview.image1)} 
                ></img>

                <h3>{item.ProductName}</h3>

                <p className="food-price"> {item.ProductPrice}</p>

                <span className="food-add">
                  <img src={plus}></img>{" "}
                </span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
