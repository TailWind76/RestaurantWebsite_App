
import soupSize from '../icons/OrderInfo/SoupSize.svg'
import EggIngridient from '../icons/OrderInfo/EggIngridient.png'
import mushroomsIngridient from '../icons/OrderInfo/mushroomsIngridient.png'
import pepperIngridient from '../icons/OrderInfo/pepperIngridient.png'
import shrimpIngridient from '../icons/OrderInfo/shrimpIngridient.png'
import tofuIngridient from '../icons/OrderInfo/tofuIngridient.png'



function SoupOrder({ selectedOptions, handleSize, handleIngridients }) {

    return(

        <div className='order-main'>
                   <p className='soup-title titles'>Soup size</p>
            <div className="sizing">
             
                
                    <div onClick={() => handleSize('small')}
    className={selectedOptions.Size === 'small' ? 'sizing-item selected-option' : 'sizing-item'}> <img src={soupSize} /> <p>small</p> </div>
                    <div onClick={() => handleSize('medium')}
    className={selectedOptions.Size === 'medium' ? 'sizing-item selected-option' : 'sizing-item'}> <img src={soupSize} /> <p>medium</p> </div>
                    <div onClick={() => handleSize('large')}
    className={selectedOptions.Size === 'large' ? 'sizing-item selected-option' : 'sizing-item'}> <img src={soupSize} /> <p>large</p> </div>



            </div>
            <p className='ingridients-title titles'>Additional ingridients</p>
            <div className='additional_ingridients'>
             
                <div onClick={() => handleIngridients('Egg')} className={selectedOptions.Ingridients === 'Egg' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
                    <img src={EggIngridient}></img> <p>Egg</p>
                    </div>

                    <div onClick={() => handleIngridients('Mushroom')} className={selectedOptions.Ingridients === 'Mushroom' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
                    <img src={mushroomsIngridient}></img> <p>Mushrooms</p>
                    </div>


                    <div onClick={() => handleIngridients('Pepper')} className={selectedOptions.Ingridients === 'Pepper' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
                    <img src={pepperIngridient}></img> <p>Red Pepper</p>
                    </div>


                    <div onClick={() => handleIngridients('Shrimp')} className={selectedOptions.Ingridients === 'Shrimp' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
                    <img src={shrimpIngridient}></img> <p>Shrimps</p>
                    </div>

                    <div onClick={() => handleIngridients('Tofu')} className={selectedOptions.Ingridients === 'Tofu' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
                    <img src={tofuIngridient}></img> <p>Tofu</p>
                    </div>



                    
                
            </div>


          



             </div>
    )
}

export default SoupOrder