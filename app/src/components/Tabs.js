import React from 'react';
import './Tabs.css';
import CategoryIcon from '@mui/icons-material/Category';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
const Tabs = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className="tabs">
            <div className={`tab-item ${selectedTab === 'tab1' ? 'selected' : ''}`} onClick={() => setSelectedTab('tab1')}><CategoryIcon/>Content</div>
            <div className={`tab-item ${selectedTab === 'tab2' ? 'selected' : ''}`} onClick={() => setSelectedTab('tab2')}><WidgetsIcon/>Collections</div>
            <div className={`tab-item ${selectedTab === 'tab3' ? 'selected' : ''}`} onClick={() => setSelectedTab('tab3')}><SettingsAccessibilityIcon/>Products</div>
        </div>
    );
};

export default Tabs;
