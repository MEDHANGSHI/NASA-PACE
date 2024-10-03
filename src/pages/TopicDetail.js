import React from 'react';
import { useParams } from 'react-router-dom';
import './TopicDetail.css'; // Link to the CSS for styling

const TopicDetail = () => {
  const { topicId } = useParams();

  // Example data for each topic (you can replace this with actual data)
  const topicsData = {
    phytoPulse: {
      title: "PhytoPulse",
      description: "Learn about phytoplankton and their role in the ocean ecosystem.",
      details: "Phytoplankton are microscopic marine algae that form the basis of the ocean food web. They are vital for producing oxygen and absorbing carbon dioxide.",
    },
    aeroTrack: {
      title: "AeroTrack",
      description: "Understand aerosols and their impact on the climate.",
      details: "Aerosols are tiny particles or droplets suspended in the atmosphere. They can influence climate and air quality by reflecting sunlight and serving as cloud condensation nuclei.",
    },
    oceanVitals: {
      title: "OceanVitals",
      description: "Explore the health of the oceans and marine life.",
      details: "Ocean health indicators include temperature, pH, and salinity. Monitoring these factors helps us understand changes in marine ecosystems.",
    },
    ociVision: {
      title: "OCI Vision",
      description: "Discover NASA's OCI Instrument and its applications.",
      details: "The OCI instrument measures ocean color to assess phytoplankton productivity, water quality, and more.",
    },
    harp2Insight: {
      title: "HARP-2 Insight",
      description: "Insights from HARP 2 and its capabilities.",
      details: "HARP 2 is a satellite instrument designed to measure atmospheric aerosols and their effects on climate.",
    },
    polarMetric: {
      title: "PolarMetric",
      description: "Learn about the Polarimeter and its significance.",
      details: "Polarimeters measure the polarization of light reflected by the Earth's surface, providing data on aerosols and surface properties.",
    },
  };

  // Get the topic data based on the topicId from the URL
  const topic = topicsData[topicId] || { title: "Not Found", description: "Topic not found.", details: "" };

  return (
    <div className="topic-detail-container">
      <h1>{topic.title}</h1>
      <h2>{topic.description}</h2>
      <p>{topic.details}</p>

      {topicId === 'phytoPulse' && (
        <div className="photo-gallery">
          <div className="photo-item">
            <img src="/images/DINOPHYSIS_SPECIES.jpg" alt="Dinophysis Species" />
            <div className="photo-description">Phytoplankton in the Atlantic Ocean</div>
          </div>
          <div className="photo-item">
            <img src="/images/CHAETOCEROUS_DEBILIS.jpg" alt="Chaetocerous Debilis" />
            <div className="photo-description">Phytoplankton bloom near Antarctica</div>
          </div>
          <div className="photo-item">
            <img src="/images/ALEXANDRIUM_TAMARANSEE.jpg" alt="Alexandrium Tamaransee" />
            <div className="photo-description">Diverse species of phytoplankton</div>
          </div>
          <div className="photo-item">
            <img src="/images/EMILLIANA_HUEXEI.jpg" alt="Emilliana Huexei" />
            <div className="photo-description">Phytoplankton seen from space</div>
          </div>
          <div className="photo-item">
            <img src="/images/MYRINECTA_RUBA.jpg" alt="Myrinecta Ruba" />
            <div className="photo-description">Phytoplankton and their role in the ecosystem</div>
          </div>
          <div className="photo-item">
            <img src="/images/PHAEOCYSTSIS_SPECIES.jpg" alt="Phaeocysts Species" />
            <div className="photo-description">Microscopic view of phytoplankton</div>
          </div>
        </div>
      )}

      <button className="back-button" onClick={() => window.history.back()}>
        Back to Learning Paths
      </button>
    </div>
  );
};

export default TopicDetail;
