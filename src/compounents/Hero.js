import TickImg from '../assets/Tick.png';
import DelImg from '../assets/Del.png';

export default function Hero({ text, id, deleteTodo }) {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex flex-1 items-center cursor-pointer'>
                <img src={TickImg} alt='Completed Task' className='w-7' />
                <p>{text}</p>
            </div>
            <div className=''>
                <img 
                    onClick={() => deleteTodo(id)} 
                    src={DelImg} 
                    alt='Delete Task' 
                    className='w-0 cursor-pointer ' 
                />
            </div>
        </div>
    );
}
