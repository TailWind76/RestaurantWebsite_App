import wasabi from '../icons/OrderInfo/wasabi.png'
import teriyaki from '../icons/OrderInfo/TeriyakiSauce.png'
import soy from '../icons/OrderInfo/SoySauce.png'
import ginger from '../icons/OrderInfo/PickledGinger.png'
import ponzu from '../icons/OrderInfo/PonzuSauce.png'


function SushiOrder({ selectedOptions, handleSushiSauceOption }) {
    
   
    return(

        <div className='order-main'>

        <div className='sauce-block sushi-sauce'> 
          <p className='sauce-title'>Choose sushi sauce</p>

          <div onClick={() => handleSushiSauceOption('wasabi')}
    className={selectedOptions.sushiSauce === 'wasabi' ? ' sauce-block__item selected-option' : 'sauce-block__item'}> <img src={wasabi} /> <p>wasabi</p> </div>

    <div onClick={() => handleSushiSauceOption('teriyaki')}
    className={selectedOptions.sushiSauce === 'teriyaki' ? ' sauce-block__item selected-option' : 'sauce-block__item'}> <img src={teriyaki} /> <p>teriyaki</p> </div>


        <div onClick={() => handleSushiSauceOption('soy')}
    className={selectedOptions.sushiSauce === 'soy' ? ' sauce-block__item selected-option' : 'sauce-block__item'}> <img src={soy} /> <p>soy</p> </div>

<div onClick={() => handleSushiSauceOption('ginger')}
    className={selectedOptions.sushiSauce === 'ginger' ? ' sauce-block__item selected-option' : 'sauce-block__item'}> <img src={ginger} /> <p>Pickled Ginger</p> </div>

<div onClick={() => handleSushiSauceOption('ponzu')}
    className={selectedOptions.sushiSauce === 'ponzu' ? ' sauce-block__item selected-option' : 'sauce-block__item'}> <img src={ponzu} /> <p>ponzu</p> </div>



        </div>


          



             </div>
    )
}

export default SushiOrder