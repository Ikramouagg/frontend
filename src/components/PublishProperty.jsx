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
    // All useState declarations at the top
    const [user, setUser] = useState(null);
    const [position, setPosition] = useState([40.7128, -74.0060]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
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
        imageUrl: '',
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
    const [additionalImages, setAdditionalImages] = useState([
        { image_url: '', caption: '' }
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        const checkUserRole = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                if (!storedUser) {
                    navigate('/login');
                    return;
                }

                const userData = JSON.parse(storedUser);
                setUser(userData);

                // Check if user is an owner
                if (userData.role !== 'Owner') {
                    // If not an owner, redirect to home page
                    navigate('/');
                    return;
                }
            } catch (error) {
                console.error('Error checking user role:', error);
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        checkUserRole();
    }, [navigate]);

    // If still loading, show loading state
    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)'
            }}>
                <div style={{ 
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: '10px',
                    background: 'white',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2>Loading...</h2>
                    <p>Please wait while we verify your access.</p>
                </div>
            </div>
        );
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

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

    const handleAdditionalImageChange = (index, field, value) => {
        const newImages = [...additionalImages];
        newImages[index] = {
            ...newImages[index],
            [field]: value
        };
        setAdditionalImages(newImages);
    };

    const addImageField = () => {
        if (additionalImages.length < 5) {
            setAdditionalImages([...additionalImages, { image_url: '', caption: '' }]);
        }
    };

    const removeImageField = (index) => {
        const newImages = additionalImages.filter((_, i) => i !== index);
        setAdditionalImages(newImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // First, create the apartment
            const apiData = {
                owner_id: user?.id || 1,
                title: formData.propertyTitle,
                description: formData.description,
                price: parseFloat(formData.pricePerNight),
                location: `${formData.address}, ${formData.city}, ${formData.country}`,
                primary_image: formData.imageUrl,
            };

            const response = await axios.post('http://localhost:3000/creatapart', apiData);

            if (response.data) {
                // Get the apartment ID from the response
                const apartmentId = response.data.apartment_id;

                // Filter out empty image entries
                const validImages = additionalImages.filter(img => img.image_url.trim() !== '');

                if (validImages.length > 0) {
                    // Upload additional images
                    await axios.post(`http://localhost:3000/creatapart/${apartmentId}/images`, {
                        images: validImages
                    });
                }

                setSuccess(true);
                // Reset form
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
                    imageUrl: '',
                });
                setAdditionalImages([{ image_url: '', caption: '' }]);
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
                <div className="publish-property-header">
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
                <div className="publish-container-wrapper">
                    <div className="publish-container">
                        <h1 className="page-title">Publish Your Property</h1>
                        
                        <form id="propertyForm" onSubmit={handleSubmit}>
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
                                                name="propertyTitle"
                                                className="form-control" 
                                                placeholder="e.g. Luxury Penthouse with Stunning View" 
                                                required 
                                                value={formData.propertyTitle}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="propertyType">Property Type*</label>
                                            <select 
                                                id="propertyType" 
                                                name="propertyType"
                                                className="form-control" 
                                                required 
                                                disabled
                                                value={formData.propertyType}
                                                onChange={handleInputChange}
                                            >
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
                                                name="bedrooms"
                                                className="form-control" 
                                                min="0" 
                                                required 
                                                disabled
                                                value={formData.bedrooms}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-col">
                                        <div className="form-group">
                                            <label htmlFor="description">Description*</label>
                                            <textarea 
                                                id="description" 
                                                name="description"
                                                className="form-control" 
                                                placeholder="Describe your property in detail..." 
                                                required 
                                                value={formData.description}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="bathrooms">Bathrooms*</label>
                                            <input 
                                                type="number" 
                                                id="bathrooms" 
                                                name="bathrooms"
                                                className="form-control" 
                                                min="0" 
                                                required 
                                                disabled
                                                value={formData.bathrooms}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="guests">Maximum Guests*</label>
                                            <input 
                                                type="number" 
                                                id="guests" 
                                                name="guests"
                                                className="form-control" 
                                                min="1" 
                                                required 
                                                disabled
                                                value={formData.guests}
                                                onChange={handleInputChange}
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
                                            <select 
                                                id="country" 
                                                name="country"
                                                className="form-control" 
                                                required
                                                value={formData.country}
                                                onChange={handleInputChange}
                                            >
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
                                                name="city"
                                                className="form-control" 
                                                required 
                                                value={formData.city}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-col">
                                        <div className="form-group">
                                            <label htmlFor="address">Address*</label>
                                            <input 
                                                type="text" 
                                                id="address" 
                                                name="address"
                                                className="form-control" 
                                                required 
                                                value={formData.address}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="zipcode">ZIP/Postal Code</label>
                                            <input 
                                                type="text" 
                                                id="zipcode" 
                                                name="zipcode"
                                                className="form-control" 
                                                disabled
                                                value={formData.zipcode}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label>Property Location on Map</label>
                                    <div id="map" className="map-container">
                                        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                                            <TileLayer
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            />
                                            <Marker position={position} />
                                            <MapEvents />
                                        </MapContainer>
                                    </div>
                                    <small className="text-muted">Click on the map to set your property location</small>
                                </div>
                            </div>
                            
                            {/* Photos Section */}
                            <div className="form-section">
                                <h2 className="section-title">Photos</h2>
                                
                                <div className="form-group">
                                    <label htmlFor="imageUrl">Primary Property Image URL*</label>
                                    <input 
                                        type="url" 
                                        id="imageUrl" 
                                        name="imageUrl"
                                        className="form-control" 
                                        placeholder="Enter the URL of your primary property image"
                                        required
                                        value={formData.imageUrl}
                                        onChange={handleInputChange}
                                    />
                                    <small className="text-muted">Enter a direct link to your primary property image (e.g., https://example.com/image.jpg)</small>
                                </div>
                                
                                {formData.imageUrl && (
                                    <div className="image-preview">
                                        <img src={formData.imageUrl} alt="Property preview" style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />
                                    </div>
                                )}

                                {/* Additional Images Section */}
                                <div className="form-group" style={{ marginTop: '20px' }}>
                                    <label>Additional Property Images (Max 5)</label>
                                    {additionalImages.map((image, index) => (
                                        <div key={index} style={{ marginBottom: '15px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                                <h4 style={{ margin: 0 }}>Image {index + 1}</h4>
                                                {index > 0 && (
                                                    <button 
                                                        type="button" 
                                                        onClick={() => removeImageField(index)}
                                                        style={{ 
                                                            background: 'none', 
                                                            border: 'none', 
                                                            color: 'red', 
                                                            cursor: 'pointer' 
                                                        }}
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor={`additionalImageUrl-${index}`}>Image URL</label>
                                                <input 
                                                    type="url" 
                                                    id={`additionalImageUrl-${index}`}
                                                    className="form-control" 
                                                    placeholder="Enter image URL"
                                                    value={image.image_url}
                                                    onChange={(e) => handleAdditionalImageChange(index, 'image_url', e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor={`imageCaption-${index}`}>Caption</label>
                                                <input 
                                                    type="text" 
                                                    id={`imageCaption-${index}`}
                                                    className="form-control" 
                                                    placeholder="Enter image caption"
                                                    value={image.caption}
                                                    onChange={(e) => handleAdditionalImageChange(index, 'caption', e.target.value)}
                                                />
                                            </div>
                                            {image.image_url && (
                                                <div className="image-preview" style={{ marginTop: '10px' }}>
                                                    <img 
                                                        src={image.image_url} 
                                                        alt={`Property preview ${index + 1}`} 
                                                        style={{ maxWidth: '100%', height: 'auto' }} 
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    
                                    {additionalImages.length < 5 && (
                                        <button 
                                            type="button" 
                                            onClick={addImageField}
                                            className="btn btn-secondary"
                                            style={{ marginTop: '10px' }}
                                        >
                                            Add Another Image
                                        </button>
                                    )}
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
                                                name="pricePerNight"
                                                className="form-control" 
                                                min="0" 
                                                required 
                                                value={formData.pricePerNight}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Submit Buttons */}
                            <div className="btn-group">
                                <button type="submit" className="btn" disabled={loading}>
                                    {loading ? 'Publishing...' : 'Publish Property'}
                                </button>
                            </div>

                            {error && (
                                <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="success-message" style={{ color: 'green', marginTop: '10px' }}>
                                    Property published successfully!
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublishProperty; 