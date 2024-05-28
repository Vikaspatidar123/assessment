import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StoreIcon from '@mui/icons-material/Store';
import './BottomNav.css';

const BottomNav = ({ selectedTab, setSelectedTab,setPopup }) => {
    return (
        <div className="bottom-nav">
            <div className={`nav-item ${selectedTab === 'home' ? 'selected' : ''}`} onClick={() => setSelectedTab('home')}>
                <HomeIcon />
                <div>Home</div>
            </div>
            <div className={`nav-item ${selectedTab === 'explore' ? 'selected' : ''}`} onClick={() => setSelectedTab('explore')}>
                <ExploreIcon />
                <div>Explore</div>
            </div>
            <div className={`nav-item get-started ${selectedTab === 'get-started' ? 'selected' : ''}`} onClick={() => {setSelectedTab('get-started');setPopup(true)}}>
                <span className="get-started-icon">
                    <ArrowDropUpIcon />
                </span>
                <div >Get Started</div>
            </div>
            <div className={`nav-item ${selectedTab === 'earnings' ? 'selected' : ''}`} onClick={() => setSelectedTab('earnings')}>
                <AccountBalanceWalletIcon />
                <div>Earnings</div>
            </div>
            <div className={`nav-item ${selectedTab === 'store' ? 'selected' : ''}`} onClick={() => setSelectedTab('store')}>
                <StoreIcon />
                <div>My Store</div>
            </div>
        </div>
    );
};

export default BottomNav;
