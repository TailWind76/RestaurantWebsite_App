import table from '../images/TablePopup/dinner.jpg'
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import tableimg from '../icons/OrderInfo/TableOrder.svg'
import close from '../icons/close.svg'

function TablePopup({setTablePopup,tablePopup,setSelectedTable}) {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [availableTables, setAvailableTables] = useState([]);
    const [tables,setTables] = useState([])
    const [activeTable,setActiveTable]=useState('')



    const handleDateChange = (date) => {
        setSelectedDate(date);

        const filteredTables = tables.tables.filter((table) =>
          table.freeTime.some((timeSlot) => timeSlot.date === format(date, 'yyyy-MM-dd'))
        );
        setAvailableTables(filteredTables);
      };
    
      const handleTimeChange = (time) => {
        setSelectedTime(time);
      };



    useEffect(() => {
        const url = "/RestaurantWebsite_App/TableStatus.json";
        axios
          .get(url)
          .then((response) => {
            setTables(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);


    return(
        <>
        <span className={tablePopup===true ?"dark-bg":"dark-bg hidden"}></span>
        <section className={tablePopup===true ? "TablePopup":"TablePopup closed-popup"}>
            <span 
            onClick={()=>setTablePopup(!tablePopup)}
            className='close-btn'> <img src={close}></img></span>
            <img className='table-image' src={table}></img>

            <div className='TablePopup-main'>

                <div className='TablePopup-filtering'>
      <h3>Choose date:</h3>
      <span className='date-container'> <input 
      type="date" 
      id="date-inp"
     onChange={(e) => handleDateChange(new Date(e.target.value))}
      />
      </span>
  
        <>
          <h3>Free tables:</h3>

          
        <div className='tables-main'> 
        {availableTables.map((table) => (
                <div
                onClick={()=>setActiveTable(table.tableNumber)}
                className='tables-main__item' >

                    <span className={activeTable===table.tableNumber?'tables-main__item_image selected-option':'tables-main__item_image'}>   
                    <img src={tableimg}/>
                    <p>{table.tableNumber}</p></span>

                    <div className='tables-main__item_description'>
                        <p>People: {table.capacity} </p>
                        {table.freeTime
                    .find((timeSlot) => timeSlot.date === format(selectedDate, 'yyyy-MM-dd'))
                    .timeSlots.map((time) => (
                      <li key={time}>{time}</li>
                    ))}
                    </div>
                </div>
        ) ) }
            
                
        </div>
            
        </>
     

      <button 
       onClick={()=>{
        setSelectedTable(activeTable);
        setTablePopup(!tablePopup);
      }}
      className='reserve-btn'>Reserve a table</button>
    </div>

        
                
            </div>
        </section>
        </>
    )
}


export default TablePopup