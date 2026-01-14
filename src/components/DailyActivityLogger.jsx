import React, { useState } from 'react';

const DailyActivityLogger = ({ onAddActivity }) => {
  const [activityType, setActivityType] = useState('');
  const [details, setDetails] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState(null);
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
    
    // Reset form
    setActivityType('');
    setDetails('');
    setQuantity(1);
    setLocation('');
    setPhoto(null);
    setPhotoPreview(null);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`);
        },
        (error) => {
          alert('Unable to retrieve your location. Please enter manually.');
          console.error('Geolocation error:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser. Please enter location manually.');
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
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
            <option value="training">Training Session</option>
            <option value="other">Other Activity</option>
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
        
        {(activityType === 'sample_distribution' || activityType === 'other') && (
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input 
              type="number" 
              id="quantity" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            id="location" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where did this activity take place?"
          />
          <div className="button-group">
            <button 
              type="button" 
              className="location-button"
              onClick={getLocation}
            >
              📍 Get Location
            </button>
            <button 
              type="button" 
              className="camera-button"
              onClick={() => document.getElementById('photo').click()}
            >
              📷 Photo
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
          {photoPreview && (
            <img 
              src={photoPreview} 
              alt="Preview" 
              className="photo-preview"
            />
          )}
        </div>
        
        <button type="submit" className="btn btn-block">
          Log Activity
        </button>
      </form>
    </div>
  );
};

export default DailyActivityLogger;
