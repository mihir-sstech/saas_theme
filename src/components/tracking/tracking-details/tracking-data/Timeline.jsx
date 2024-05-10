import React from 'react';
import './Timeline.css';

const TimelineItem = ({ time, date, icon, gradient, children }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-time">
        <header>{date}</header>
        <footer>{time}</footer>
      </div>
      <div className="timeline-icon">{icon}</div>
      <div className={`${gradient !== 'gradient-3' ? 'timeline-card' : 'image-card'} ${gradient}`}>{children}</div>
    </div>
  );
};

const Timeline = ({ children }) => {
  return <div className="timeline">{children}</div>;
};

export { Timeline, TimelineItem };