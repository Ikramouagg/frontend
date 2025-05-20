import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './PublishProperty.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Fix for default marker icon in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const PublishProperty = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    const [formData, setFormData] = useState({
        propertyTitle: '',
        propertyType: '',
        bedrooms: '',
        description: '',
        bathrooms: '',
        guests: '',
        country: '',
        city: '',
        address: '',
        zipcode: '',
        pricePerNight: '',
        weeklyDiscount: '',
        cleaningFee: '',
        monthlyDiscount: '',
        checkInTime: '',
        checkOutTime: '',
        houseRules: '',
    });

    const [amenities, setAmenities] = useState({
        wifi: false,
        parking: false,
        pool: false,
        kitchen: false,
        ac: false,
        heating: false,
        tv: false,
        washer: false,
        dryer: false,
        workspace: false,
    });

    const [images, setImages] = useState([]);
    const [position, setPosition] = useState([40.7128, -74.0060]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAmenityChange = (e) => {
        const { name, checked } = e.target;
        setAmenities(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));
        setImages(prev => [...prev, ...newImages]);
    };

    const removeImage = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const apiData = {
                owner_id: 1,
                title: formData.propertyTitle,
                description: formData.description,
                price: parseFloat(formData.pricePerNight),
                location: `${formData.address}, ${formData.city}, ${formData.country}`,
                primary_image: images.length > 0 ? images[0].preview : '',
            };

            const response = await axios.post('/creatapart', apiData);

            if (response.data) {
                setSuccess(true);
                setFormData({
                    propertyTitle: '',
                    propertyType: '',
                    bedrooms: '',
                    description: '',
                    bathrooms: '',
                    guests: '',
                    country: '',
                    city: '',
                    address: '',
                    zipcode: '',
                    pricePerNight: '',
                    weeklyDiscount: '',
                    cleaningFee: '',
                    monthlyDiscount: '',
                    checkInTime: '',
                    checkOutTime: '',
                    houseRules: '',
                });
                setImages([]);
                setAmenities({
                    wifi: false,
                    parking: false,
                    pool: false,
                    kitchen: false,
                    ac: false,
                    heating: false,
                    tv: false,
                    washer: false,
                    dryer: false,
                    workspace: false,
                });
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create property. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const MapEvents = () => {
        useMapEvents({
            click: (e) => {
                setPosition([e.latlng.lat, e.latlng.lng]);
            },
        });
        return null;
    };

    return (
        <>
            <div style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)', padding: '0 0 0px 0' }}>
                {/* Top Blue Bar */}
                <div style={{ width: '100%', background: '#212842', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', top: 0, left: 0, zIndex: 100, boxShadow: '0 2px 8px #0002' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 32 }}>
                        <img src="/logo.png" alt="logo" style={{ width: 32, height: 32 }} />
                        <span style={{ color: '#FBE2AB', fontWeight: 700, fontSize: 20 }}>DarDz</span>
                    </div>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                        <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Home</a>
                        <a href="#apartements" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Apartements</a>
                        <a href="#about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>About</a>
                        <a href="/booking" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>MyBookings</a>
                    </nav>
                    {user ? (
                        <button onClick={handleLogout} style={{ marginRight: 32, background: 'none', border: 'none', color: '#fff', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Logout</button>
                    ) : (
                        <button onClick={() => navigate('/login')} style={{ marginRight: 32, background: 'none', border: 'none', color: '#fff', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Login</button>
                    )}
                </div>
            </div>

            <div className="main-content">
                <div className="container">
                    <div className="publish-container">
                        <h1 className="page-title">Publish Your Property</h1>
                        
                        <form id="propertyForm">
                            {/* Basic Information Section */}
                            <div className="form-section">
                                <h2 className="section-title">Basic Information</h2>
                                
                                <div className="form-row">
                                    <div className="form-col">
                                        <div className="form-group">
                                            <label htmlFor="propertyTitle">Property Title*</label>
                                            <input 
                                                type="text" 
                                                id="propertyTitle" 
                                                className="form-control" 
                                                placeholder="e.g. Luxury Penthouse with Stunning View" 
                                                required 
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="propertyType">Property Type*</label>
                                            <select id="propertyType" className="form-control" required>
                                                <option value="">Select Property Type</option>
                                                <option value="apartment">Apartment</option>
                                                <option value="house">House</option>
                                                <option value="villa">Villa</option>
                                                <option value="cottage">Cottage</option>
                                                <option value="hotel">Hotel</option>
                                                <option value="guesthouse">Guest House</option>
                                            </select>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="bedrooms">Bedrooms*</label>
                                            <input 
                                                type="number" 
                                                id="bedrooms" 
                                                className="form-control" 
                                                min="0" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-col">
                                        <div className="form-group">
                                            <label htmlFor="description">Description*</label>
                                            <textarea 
                                                id="description" 
                                                className="form-control" 
                                                placeholder="Describe your property in detail..." 
                                                required 
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="bathrooms">Bathrooms*</label>
                                            <input 
                                                type="number" 
                                                id="bathrooms" 
                                                className="form-control" 
                                                min="0" 
                                                required 
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="guests">Maximum Guests*</label>
                                            <input 
                                                type="number" 
                                                id="guests" 
                                                className="form-control" 
                                                min="1" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Location Section */}
                            <div className="form-section">
                                <h2 className="section-title">Location</h2>
                                
                                <div className="form-row">
                                    <div className="form-col">
                                        <div className="form-group">
                                            <label htmlFor="country">Country*</label>
                                            <select id="country" className="form-control" required>
                                                <option value="">Select Country</option>
                                                <option value="US">United States</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="CA">Canada</option>
                                                <option value="AU">Australia</option>
                                                {/* More countries can be added */}
                                            </select>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="city">City*</label>
                                            <input 
                                                type="text" 
                                                id="city" 
                                                className="form-control" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-col">
                                        <div className="form-group">
                                            <label htmlFor="address">Address*</label>
                                            <input 
                                                type="text" 
                                                id="address" 
                                                className="form-control" 
                                                required 
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="zipcode">ZIP/Postal Code</label>
                                            <input 
                                                type="text" 
                                                id="zipcode" 
                                                className="form-control" 
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label>Property Location on Map</label>
                                    <div id="map" className="map-container" />
                                    <small className="text-muted">Click on the map to set your property location</small>
                                </div>
                            </div>
                            
                            {/* Amenities Section */}
                            <div className="form-section">
                                <h2 className="section-title">Amenities</h2>
                                
                                <div className="form-group">
                                    <label>Select Amenities</label>
                                    <div className="checkbox-group">
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="wifi" name="amenities" />
                                            <label htmlFor="wifi">WiFi</label>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="parking" name="amenities" />
                                            <label htmlFor="parking">Parking</label>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="pool" name="amenities" />
                                            <label htmlFor="pool">Swimming Pool</label>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="kitchen" name="amenities" />
                                            <label htmlFor="kitchen">Kitchen</label>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="ac" name="amenities" />
                                            <label htmlFor="ac">Air Conditioning</label>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="heating" name="amenities" />
                                            <label htmlFor="heating">Heating</label>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="tv" name="amenities" />
                                            <label htmlFor="tv">TV</label>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="washer" name="amenities" />
                                            <label htmlFor="washer">Washer</label>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="dryer" name="amenities" />
                                            <label htmlFor="dryer">Dryer</label>
                                        </div>
                                        <div className="checkbox-item">
                                            <input type="checkbox" id="workspace" name="amenities" />
                                            <label htmlFor="workspace">Workspace</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Pricing Section */}
                            <div className="form-section">
                                <h2 className="section-title">Pricing</h2>
                                
                                <div className="form-row">
                                    <div className="form-col">
                                        <div className="form-group">
                                            <label htmlFor="pricePerNight">Price Per Night (DZD)*</label>
                                            <input 
                                                type="number" 
                                                id="pricePerNight" 
                                                className="form-control" 
                                                min="0" 
                                                required 
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="weeklyDiscount">Weekly Discount (%)</label>
                                            <input 
                                                type="number" 
                                                id="weeklyDiscount" 
                                                className="form-control" 
                                                min="0" 
                                                max="100" 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-col">
                                        <div className="form-group">
                                            <label htmlFor="cleaningFee">Cleaning Fee (DZD)</label>
                                            <input 
                                                type="number" 
                                                id="cleaningFee" 
                                                className="form-control" 
                                                min="0" 
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="monthlyDiscount">Monthly Discount (%)</label>
                                            <input 
                                                type="number" 
                                                id="monthlyDiscount" 
                                                className="form-control" 
                                                min="0" 
                                                max="100" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Photos Section */}
                            <div className="form-section">
                                <h2 className="section-title">Photos</h2>
                                
                                <div className="form-group">
                                    <label>Upload Property Photos*</label>
                                    <div className="file-upload" id="fileUpload">
                                        <i className="fas fa-cloud-upload-alt" />
                                        <p>Click to upload or drag and drop</p>
                                        <small>PNG, JPG, GIF up to 10MB</small>
                                        <input 
                                            type="file" 
                                            id="propertyImages" 
                                            multiple 
                                            accept="image/*" 
                                            style={{ display: 'none' }} 
                                        />
                                    </div>
                                    
                                    <div className="preview-images" id="previewImages" />
                                </div>
                            </div>
                            
                            {/* Additional Information */}
                            <div className="form-section">
                                <h2 className="section-title">Additional Information</h2>
                                
                                <div className="form-group">
                                    <label htmlFor="checkInTime">Check-in Time</label>
                                    <input 
                                        type="time" 
                                        id="checkInTime" 
                                        className="form-control" 
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="checkOutTime">Check-out Time</label>
                                    <input 
                                        type="time" 
                                        id="checkOutTime" 
                                        className="form-control" 
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="houseRules">House Rules</label>
                                    <textarea 
                                        id="houseRules" 
                                        className="form-control" 
                                        placeholder="Any specific rules for guests..." 
                                    />
                                </div>
                            </div>
                            
                            {/* Submit Buttons */}
                            <div className="btn-group">
                                <button type="submit" className="btn">Publish Property</button>
                                <button type="button" className="btn btn-secondary">Save as Draft</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublishProperty; 