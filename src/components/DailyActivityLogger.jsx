import React, { useState } from 'react';

const DailyActivityLogger = ({ onAddActivity }) => {
  const [activityType, setActivityType] = useState('');
  const [details, setDetails] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activityType) {
      alert('Please select an activity type');
      return;
    }
    
    const newActivity = {
      type: activityType,
      details,
      quantity: parseInt(quantity),
      location,
      photo: photoPreview
    };
    
    onAddActivity(newActivity);
    setActivityType('');
    setDetails('');
    setQuantity(1);
    setLocation('');
    setPhotoPreview(null);
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);

    const options = {
      enableHighAccuracy: true,
      timeout: 8000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Sets coordinates directly into the form field
        setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        setIsLocating(false);
      },
      (error) => {
        setIsLocating(false);
        alert(`Error (${error.code}): ${error.message}. Please ensure GPS is on.`);
      },
      options
    );
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card">
      <h3>Daily Activity Logger</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="activityType">Activity Type *</label>
          <select 
            id="activityType" 
            value={activityType} 
            onChange={(e) => setActivityType(e.target.value)}
            required
          >
            <option value="">Select an activity</option>
            <option value="doctor_visit">Doctor Visit</option>
            <option value="pharmacy_call">Pharmacy Call</option>
            <option value="sample_distribution">Sample Distribution</option>
            <option value="meeting">Meeting</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea 
            id="details" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Enter details about the activity..."
            rows="3"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Location (Coordinates)</label>
          <input 
            type="text" 
            id="location" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Auto-populated with GPS..."
          />
          <div className="button-group">
            <button 
              type="button" 
              className="location-button"
              onClick={getLocation}
              disabled={isLocating}
            >
              {isLocating ? '⌛ Locating...' : '📍 Get My GPS Location'}
            </button>
            <button 
              type="button" 
              className="camera-button"
              onClick={() => document.getElementById('photo').click()}
            >
              📷 Add Photo
            </button>
          </div>
          <input 
            type="file" 
            id="photo" 
            accept="image/*" 
            capture="environment"
            onChange={handlePhotoChange}
            style={{display: 'none'}}
          />
          {photoPreview && <img src={photoPreview} alt="Preview" className="photo-preview" />}
        </div>
        
        <button type="submit" className="btn btn-block">Log Activity</button>
      </form>
    </div>
  );
};

export default DailyActivityLogger;