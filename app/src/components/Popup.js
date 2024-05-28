import './Popup.css';
import CloseIcon from '@mui/icons-material/Close';
const Popup=({setPopup})=>{
    return <div className='container'>
        <div className='box'>
            <div className='card'>ReEagage</div>
            <div className='card'>Able</div>
            <div className='card'>Shop</div>
            <div className='card'>ReCommed</div>
            
        </div>
        <div className='icon' onClick={()=>setPopup(false)}><CloseIcon/></div>
    </div>
}
export default Popup;