import pepperSauce from '../icons/OrderInfo/pepperSauce.png'
import wineSauce from '../icons/OrderInfo/wineSauce.png'
import mushroomSauce from '../icons/OrderInfo/muschroomSauce.png'


function PorkChickenOrder({ selectedOptions, handleSauceOption, handleDonenessOption }) {
    
   
    return(

        <div className='order-main'>
        <div className='sauce-block'> 
          <p className='sauce-title'>Choose sauce</p>

          <div onClick={() => handleSauceOption('pepper sauce')}
    className={selectedOptions.sauce === 'pepper sauce' ? ' sauce-block__item selected-option' : 'sauce-block__item'}> <img src={pepperSauce} /> <p>Black pepper sauce</p> </div>

<div onClick={() => handleSauceOption('wine sauce')}
    className={selectedOptions.sauce === 'wine sauce' ? ' sauce-block__item selected-option' : 'sauce-block__item'}> <img src={wineSauce} /> <p>Wine sauce</p> </div>

<div onClick={() => handleSauceOption('mushroom sauce')}
    className={selectedOptions.sauce === 'mushroom sauce' ? ' sauce-block__item selected-option' : 'sauce-block__item'}> <img src={mushroomSauce} /> <p>Mushroom sauce</p> </div>
        </div>
        <div className='marker'></div>

          <div className='doneness-block'>

            <p>Choose the dineness of the meat</p>

            <div className='doneness-settings'>

            <div onClick={() => handleDonenessOption('Dinenes 50%')}
     className={selectedOptions.doneness === 'Dinenes 50%' ? 'doneness-setting selected-option' : 'doneness-setting'}><p>50%</p></div>

    <div onClick={() => handleDonenessOption('Dinenes 70%')}
    className={selectedOptions.doneness === 'Dinenes 70%' ? 'doneness-setting selected-option' : 'doneness-setting'}><p>70%</p></div>
<div onClick={() => handleDonenessOption('Dinenes 100%')}
    className={selectedOptions.doneness === 'Dinenes 100%' ? 'doneness-setting selected-option' : 'doneness-setting'}><p>100%</p></div>
            </div>
             </div>

          



             </div>
    )
}

export default PorkChickenOrder