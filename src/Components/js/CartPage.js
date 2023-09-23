import back from '../icons/OrderInfo/back.svg'
import deleteProduct from "../icons/OrderInfo/trash.svg";
import { useState, useEffect } from 'react';

function CartPage({ cartOpen,setOrderList,orderList,ordering,setCartOpen, openPageHandler,setOrder, data }) {
  
  const handleDeleteProduct = (id) => {
    const updatedOrdering = ordering.filter((orderProduct) => orderProduct.id !== id);
    setOrder(updatedOrdering);
  };

 
  const [limitedSuggest, setLimitedSuggest] = useState([]);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

  const dataCopy = [...data];
  

  shuffleArray(dataCopy);
  useEffect(() => {
   
    const dataCopy = [...data];
    

    shuffleArray(dataCopy);
    
 
    const limitedData = dataCopy.slice(0, 5);
    
    
    setLimitedSuggest(limitedData);
  }, [data])

  return (<section className={cartOpen ? "CartPage" : "CartPage closed-cart"}>
    
      <div className="Cart-section">
       <span onClick={()=>{setCartOpen(!cartOpen)}} className='back-btn'> <img src={back}></img> </span>  <h2 className='cart_mainTitle'>My cart ({ordering.length}) </h2>
        <span
        onClick={()=>{setOrderList((prevOrderList) => [...prevOrderList, ...ordering]);
              setOrder([])
      }}
        className='place-order-btn'><p>Place order</p></span>



        <div className="cart-header">
          <p className="dishes-title">List of dishes</p>
          <p className="quantity-title">Quantity</p>
          <p className="price-title">Price</p>
          <p onClick={()=>setOrder([])} className="clear-title">Clear all</p>
        </div>

        <div className="cart-main">
          {ordering.map((orderProduct) => (
            <div className="cart-main__item">
              <div className="cart-main__item_productInfo">
                <img src={orderProduct.ProductImage}></img>
                <div className="cart-main__item_info">
                  <h2 className="Product-name">{orderProduct.ProductName}</h2>
                  <ul className="Product-additional">
                    {Object.values(orderProduct.selectedOptions).map(
                      (item, index) => {
                        if (item !== "") {
                          return <li key={index}>{item}</li>;
                        }
                        return null;
                      },
                    )}
                  </ul>
                </div>
              </div> 

              <div className="cart-main__item_productAdditional">
                <p>{orderProduct.productQuantity}x</p>
              </div>

              <div className="cart-main__item_productAdditional">
                <p>${orderProduct.ProductPrice}</p>
              </div>

              <div className="cart-main__item_productAdditional">
                <span
                  className="delete-button"
                  onClick={() => handleDeleteProduct(orderProduct.id)}
                >
                  <img src={deleteProduct} alt="Remove product" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="Suggest-section">
        <h2>Suggested dishes</h2>

        {limitedSuggest.map((item) => (
        <div
        className="suggested-item"
        onClick={() => {
          openPageHandler(item.id);
          setCartOpen(!cartOpen);
        }}
      >
            <img src={item.ProductGallery[0].image1}></img>

            <h3>{item.ProductName}</h3>

            <h3>{item.ProductPrice}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CartPage;