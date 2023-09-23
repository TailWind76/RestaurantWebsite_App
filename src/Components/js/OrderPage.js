import back from '../icons/OrderInfo/back.svg'
import refresh from '../icons/OrderInfo/refresh.svg'
import discount from '../icons/OrderInfo/discount.svg'
import bill from '../icons/headerNavBar/bill.svg'
import wallet from '../icons/OrderInfo/wallet.svg'
import cash from '../icons/OrderInfo/cash.svg'
import card from '../icons/OrderInfo/card.svg'
import printer from '../icons/OrderInfo/printer.svg'
import close from "../icons/close.svg";
import { useEffect } from 'react'
import { useState } from 'react'


function OrderPage({orderOpen,orderList,setOrderOpen,setOrderList,}) {

const [totalPrice,setTotalPrice]=useState(0)
const [tax,setTax]=useState(0)
const [Subtotal,setSubtotal]=useState(0)
const [openDiscount,setOpenDiscount]=useState(false)
const [selectedPayment, setSelectedPayment] = useState('');

const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };


useEffect(() => {
    const newTotalPrice = orderList.reduce((total, orderProduct) => {
      return total + parseFloat(orderProduct.ProductPrice);
    }, 0);
  

    const tax = newTotalPrice * 0.06;
  
 
    setTotalPrice(Math.round(newTotalPrice));
    setTax(Math.round(tax));
    setSubtotal(Math.round(newTotalPrice - tax));
  }, [orderList]);

    return(
        <section className={orderOpen ? "OrderPage" : "OrderPage closed-cart"}>
            <div className="Order-section">
            <span onClick={()=>{setOrderOpen(!orderOpen)}} className='back-btn'> <img src={back}></img> </span> 
             <h2 className='cart_mainTitle'>My order ({orderList.length}) </h2>
            <div className="order-header">
                <p className="dishes-title">List of dishes</p>
                <p className="quantity-title">Quantity</p>
                <p className="price-title">Price</p>
                <p  className="clear-title">Reorder</p>
            </div>

            <div className="order-wrapper">
                
                     {orderList.map((orderProduct) => (
                       
            <div className="cart-main__item order-item">
              <div className="cart-main__item_productInfo  ">
                <img src={orderProduct.ProductImage}></img>
                <div className="cart-main__item_info order-info">
                  <h2 className="Product-name">{orderProduct.ProductName}</h2>
                 
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
                 
                >
                  <img src={refresh} alt="re-order" />
                </span>
              </div>
            </div>
          ))}


                </div>



            </div>


        <div className="bill-section">

            <div className='bill-discount'>
                    <div className={openDiscount?'discount-block discount-open':'discount-block'}> 
                      <p>Enter discount code</p>
                    <span
                    onClick={()=>setOpenDiscount(!openDiscount)}
                    className='close-discount'> <img src={close}></img></span>
                      <form>

                        <input
                        type='text'
                        placeholder='code..'
                        ></input>
                      </form>
                    </div>
                      

            <p>Can use</p>
            <div className='bill-discoint__item'> <img src={bill}/> <p>Add E-invoice</p> <span> <p>+</p></span> </div>

            <div 
            onClick={()=>setOpenDiscount(!openDiscount)}
            className='bill-discoint__item'><img src={discount}/> <p>discount</p> <span><p>+</p></span> </div>
            </div>

            <div className='bill-price'>

                <div className='bill-price__items'>
                    <div className='bill-price__item'>
                        <p>Tax 6%:</p>  <p>${tax}</p>
                    </div>

                    <div className='bill-price__item'>
                        <p>Subtotal:</p> <p>${Subtotal}</p>
                    </div>
                </div>

                <div className='bill-price__item_summary'>

                    <p>Total:</p>

                    <p>${totalPrice}</p>
                </div>


            </div>

            <div className='payment-method'>

                <p>Payment method</p>

                <div className='payment-method__items'>

                    <div 
                      onClick={() => handlePaymentSelection('cash')}
                      className='payment-method__item'>
                            <span className={selectedPayment === 'cash' ?  'payment-method__item_img selected-option': 'payment-method__item_img'}> <img src={cash}/> </span>
                            <p>Cash</p>

                    </div>

                    <div className='payment-method__item'
                        onClick={() => handlePaymentSelection('ewallet')}
                    >
                   <span className={selectedPayment === 'ewallet' ?  'payment-method__item_img selected-option': 'payment-method__item_img'}> <img src={wallet}/> </span>
                            <p>E-Wallet</p>

                    </div>


                    <div className='payment-method__item'
                      onClick={() => handlePaymentSelection('card')}
                    >
                        
                        <span className={selectedPayment === 'card' ?  'payment-method__item_img selected-option': 'payment-method__item_img'}> <img src={card}/> </span>
                            <p>Debit card</p>

                    </div>

                </div>



            </div>

            <button className='print-bill'>
                      <img src={printer}/>

                      <p>Print bill</p>

            </button>
            


        </div>

        </section>
    )
}


export default OrderPage