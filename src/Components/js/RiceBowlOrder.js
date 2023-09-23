
import RiceSize from '../icons/OrderInfo/bowlSize.svg'
import EggIngridient from '../icons/OrderInfo/EggIngridient.png'
import mushroomsIngridient from '../icons/OrderInfo/mushroomsIngridient.png'
import pepperIngridient from '../icons/OrderInfo/pepperIngridient.png'
import shrimpIngridient from '../icons/OrderInfo/shrimpIngridient.png'
import tofuIngridient from '../icons/OrderInfo/tofuIngridient.png'
import cheeseIngridient from '../icons/OrderInfo/cheeseIngridient.png'



import Teriaki from '../icons/OrderInfo/TeriyakiSauce.png'
import mayonnaise from '../icons/OrderInfo/mayonnaise.png'
import ponzu from '../icons/OrderInfo/PonzuSauce.png'


function RiceBowlOrder({ selectedOptions, handleSize,handleSauce, handleIngridients }) {

    return(

        <div className='order-main'>
                   <p className='soup-title titles'>Rice Bowl size</p>
            <div className="sizing">
             
                
                    <div onClick={() => handleSize('small')}
    className={selectedOptions.Size === 'small' ? 'sizing-item selected-option' : 'sizing-item'}> <img src={RiceSize} /> <p>small</p> </div>
                    <div onClick={() => handleSize('medium')}
    className={selectedOptions.Size === 'medium' ? 'sizing-item selected-option' : 'sizing-item'}> <img src={RiceSize} /> <p>medium</p> </div>
                    <div onClick={() => handleSize('large')}
    className={selectedOptions.Size === 'large' ? 'sizing-item selected-option' : 'sizing-item'}> <img src={RiceSize} /> <p>large</p> </div>



            </div>
         


            <div className='additional_sauces'>

            <p className='ingridients-title titles'>choose additional sauce</p>


                    <div onClick={() => handleSauce('Teriaki')}
            className={selectedOptions.sauce === 'Teriaki' ? 'additional_sauces__item selected-option' : 'additional_sauces__item'}><img src={Teriaki}></img> <p>Teriyaki</p> </div>
                       <div onClick={() => handleSauce('mayonnaise')}
            className={selectedOptions.sauce === 'mayonnaise' ? 'additional_sauces__item selected-option' : 'additional_sauces__item'}> <img src={mayonnaise}></img> <p>Mayonnaise</p> </div>
                       <div onClick={() => handleSauce('ponzu')}
            className={selectedOptions.sauce === 'ponzu' ? 'additional_sauces__item selected-option' : 'additional_sauces__item'}><img src={ponzu}></img><p>Ponzu</p></div>
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

                    <div onClick={() => handleIngridients('Cheese')} className={selectedOptions.Ingridients === 'Cheese' ? 'additional_ingridients__item selected-option' : 'additional_ingridients__item'}>
                    <img src={cheeseIngridient}></img> <p>Cheese</p>
                    </div>

                    



                    
                
            </div>


          



             </div>
    )
}

export default RiceBowlOrder