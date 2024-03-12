// app/components/GalleryTabs.jsx
'use client'
import { useState } from 'react';
import LogoGallery from './LogoGallery';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('logo');

  const tabs = [
    { id: 'logo', title: 'Logos' },
    { id: 'graphicDesign', title: 'Graphic Design' },
    { id: 'webDesign', title: 'Web Design' },
  ];

  const renderContent = (tab) => {
    switch (tab) {
      case 'logo':
        return <LogoGallery />;
      case 'graphicDesign':
        return <div>Graphic Design Gallery Here</div>;
      case 'webDesign':
        return <div>Web Design Gallery Here</div>;
      default:
        return null;
    }
  };

  return (
    <div className='mt-5 mb-5'>
      <h2 className="text-3xl text-center my-10 py-10">MY WORK</h2>
      <ul role="tablist" className="tabs m-5 tabs flex justify-center">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`tab text-lg ${activeTab === tab.id ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>
        {renderContent(activeTab)}
      </div>
    </div>
  );
};

export default Tabs;
