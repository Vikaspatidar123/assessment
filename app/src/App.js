import React, { useEffect, useState } from 'react';
import Tabs from './components/Tabs';
import CardList from './components/CardList';
import BottomNav from './components/BottomNav';
import Modal from './components/Modal';
import './App.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import Popup from './components/Popup';
const App = () => {
    const [selectedTab, setSelectedTab] = useState('tab1');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBottomTab, setSelectedBottomTab] = useState('home');
    const [isPopup,setPopup]=useState(false)
    useEffect(()=>{
     if(selectedBottomTab==='get-started'){
        setPopup(true)
     }else{
        setPopup(false)
     }
    },[selectedBottomTab])

    const getCards = () => {
        switch (selectedTab) {
            case 'tab1':
                return ['https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_640.jpg', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg','https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_640.jpg','https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_640.jpg'];
            case 'tab2':
                return ['https://media.gettyimages.com/id/1477654940/photo/dusk-on-the-streets-of-mumbai-india.jpg?s=612x612&w=gi&k=20&c=ZPDDlzwBWYFXRVbY2rDm3E3yNnWdTaH9xZfCfcW45lc=', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg','https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_640.jpg','https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_640.jpg'];
            case 'tab3':
                return ['https://media.istockphoto.com/id/539018660/photo/taj-mahal-hotel-and-gateway-of-india.jpg?s=612x612&w=0&k=20&c=L1LJVrYMS8kj2rJKlQMcUR88vYoAZeWbYIGkcTo6QV0=', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg','https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_640.jpg','https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_640.jpg'];
            default:
                return [];
        }
    };

    return (
        <div className="app">
            <div className='top-head'>
                <div className='top-title'><div className='arrow'> <span><ArrowBackIcon/></span> starchild2.0_by_krissannba...</div> <div className='share' onClick={()=>setIsModalOpen(true)}><ShareIcon/></div></div>
            </div>
            <div className="profile-header">
            <div className='head'>
                <img width={80} height={80} className="profile-picture" src="https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg" alt="Profile" />
                <div className='profile-empty'/>
                <div className='name-title'>
                <div className='name'>starchild...</div>
                <div className='actor'>Actor</div>
                </div>
                </div>
                <div className="profile-info">
                    <div>Equalist | Animal lover | Happy child✨</div>
                    <div>Social media - krissann@theplugmedia.in @theplugmedia.in</div>
                    <div>Acting inquiries - teamkrissann@gmail.com@talentgram.agency</div>
                    <a href="https://www.instagram.com/krissannb/">https://www.instagram.com/krissannb/</a>
                    <div className="follow-info">
                        <span> <div className='count'>52</div> <div>products</div></span>
                        <span> <div className='count'>1M </div> <div>followers</div></span>
                        <button className="follow-button">+ Follow</button>
                    </div>
                </div>
            </div>
            {isPopup&&<Popup setPopup={setPopup}/>}
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <CardList cards={getCards()} />
            <BottomNav selectedTab={selectedBottomTab} setSelectedTab={setSelectedBottomTab} setPopup={setPopup}/>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default App;
