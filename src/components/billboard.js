// src/components/VideoBackground.js
import React from 'react';
import '../css/components.css'

export default function BillBoard({ videoUrl }){
  return (
    <div className="billboard">
      <video autoPlay muted loop>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
