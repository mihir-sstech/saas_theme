import React from 'react';
import './Timeline.css';
import DriverMobileLogo from "../../../../assets/images/driver-mobile-logo.png";

const TimelineItem = ({ time, date, icon, gradient, children }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-time">
        <header>{date}</header>
        <footer>{time}</footer>
      </div>
      <div className={`${icon ? 'timeline-icon-container' : 'timeline-img'}`}>
        {icon ? (
          <div className='timeline-icon'>{icon}</div>
        ) : (
          <>
            <img src={DriverMobileLogo} alt="Driver logo" />
          </>
        )}
      </div>
      <div className={`${gradient !== 'gradient-3' ? 'timeline-card' : 'image-card'} ${gradient}`}>{children}</div>
    </div>
  );
};

const Timeline = ({ children, customClass }) => {
  return <div className={`timeline ${customClass}`}>{children}</div>;
};

export { Timeline, TimelineItem };