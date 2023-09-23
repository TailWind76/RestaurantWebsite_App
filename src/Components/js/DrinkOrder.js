import Ice from '../icons/OrderInfo/iceCube.png'
import mint from '../icons/OrderInfo/mint.png'
import cinnamon from '../icons/OrderInfo/cinnamon.png'
import honey from '../icons/OrderInfo/honey.png'
import DrinkSize from '../icons/OrderInfo/DrinkSize.svg'
function DrinkOrder({ selectedOptions, handleSize,handleSauce, handleIngridients}) {
    
   
    return(

        <div className='order-main'>
        <p className='soup-title titles'>Drink size</p>
 <div className="sizing">
  
     
         <div onClick={() => handleSize('small')}
className={selectedOptions.Size === 'small' ? 'sizing-item selected-option' : 'sizing-item'}> <img src={DrinkSize} /> <p>350ml</p> </div>
         <div onClick={() => handleSize('medium')}
className={selectedOptions.Size === 'medium' ? 'sizing-item selected-option' : 'sizing-item'}> <img src={DrinkSize} /> <p>500ml</p> </div>
         <div onClick={() => handleSize('large')}
className={selectedOptions.Size === 'large' ? 'sizing-item selected-option' : 'sizing-item'}> <img src={DrinkSize} /> <p>750ml</p> </div>



 </div>






    <p className='ingridients-title titles'>Additional</p>
    <div className='additional_ingridients'>

    <div onClick={() => handleIngridients('Ice')} className={selectedOptions.Ingridients === 'Ice' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
                    <img src={Ice}></img> <p>Ice</p>
                    </div>

  <div onClick={() => handleIngridients('mint')} className={selectedOptions.Ingridients === 'mint' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
  <img src={mint}></img> <p>mint</p>
</div>

<div onClick={() => handleIngridients('cinnamon')} className={selectedOptions.Ingridients === 'cinnamon' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
                    <img src={cinnamon}></img> <p>cinnamon</p>
                    </div>

  <div onClick={() => handleIngridients('honey')} className={selectedOptions.Ingridients === 'honey' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
  <img src={honey}></img> <p>honey</p>
</div>             
  
 



         
     
 </div>






  </div>
    )
}

export default DrinkOrder   