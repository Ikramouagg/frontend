import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/style.css';
import "boxicons/css/boxicons.min.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ApartmentDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [apartment, setApartment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bookingDate, setBookingDate] = useState('');
    const [days, setDays] = useState(1);
    const [bookingStatus, setBookingStatus] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        const fetchApartmentDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/listapart/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch apartment details');
                }
                const data = await response.json();
                setApartment(data.apartment);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApartmentDetails();
    }, [id]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    // Booking handler
    const handleBooking = async (e) => {
        e.preventDefault();
        setBookingStatus(null);
        if (!user) {
            navigate('/login');
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tenant_id: user.id || user.tenant_id,
                    apartment_id: Number(id),
                    booking_date: bookingDate,
                    days: Number(days)
                })
            });
            if (!res.ok) throw new Error('Booking failed');
            setBookingStatus('success');
        } catch (err) {
            setBookingStatus('error');
        }
    };

    if (loading) return <div className="loading">Loading apartment details...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!apartment) return <div className="error">Apartment not found</div>;

    return (
        <div style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)', minHeight: '100vh', padding: '0 0 48px 0' }}>
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
            {/* Spacer for fixed bar */}
            <div style={{ height: 56 }}></div>

            {/* Header */}
           

            {/* Main Content Card */}
            <div style={{ maxWidth: 1200, margin: '48px auto 0 auto', borderRadius: 40, boxShadow: '0 8px 32px #0002', background: '#fff', padding: 0, overflow: 'hidden', position: 'relative' }}>
                {/* Image Gallery */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: 12, padding: 32, paddingBottom: 0, background: 'transparent' }}>
                    <div style={{ gridRow: '1 / span 2', gridColumn: '1 / 2', height: 300, borderRadius: 24, overflow: 'hidden' }}>
                        <img src={apartment.primary_image || 'https://picsum.photos/600/400?random=1'} alt={apartment.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    {(() => {
                        const thumbs = (apartment.additional_images || []).slice(0, 5);
                        const placeholders = [
                            'https://picsum.photos/200/140?random=2',
                            'https://picsum.photos/200/140?random=3',
                            'https://picsum.photos/200/140?random=4',
                            'https://picsum.photos/200/140?random=5',
                            'https://picsum.photos/200/140?random=6',
                        ];
                        return [
                            ...thumbs.map((img, i) => (
                                <img key={i} src={img.image_url} alt={img.caption || `thumb${i+1}`} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 24 }} />
                            )),
                            ...placeholders.slice(thumbs.length).map((url, i) => (
                                <img key={thumbs.length + i} src={url} alt={`thumb${thumbs.length + i + 1}`} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 24 }} />
                            ))
                        ];
                    })()}
                </div>

                {/* Two-column layout inside the card */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32, padding: 32 }}>
                    {/* Left column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                            <div>
                                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4, lineHeight: 1.1 }}>{apartment.title}</h1>
                                <div style={{ color: '#6b7280', fontSize: 18, marginBottom: 8 }}>{apartment.location}</div>
                            </div>
                            <div style={{ color: '#fa3015', display: 'flex', alignItems: 'center', fontWeight: 500, fontSize: 16 }}>
                                <i className="bx bxs-heart" style={{ marginRight: 4 }}></i>150 likes
                            </div>
                        </div>
                        {/* Highlights */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, textAlign: 'center', marginBottom: 24 }}>
                            <div><div style={{ color: '#6b7280', fontWeight: 500 }}>Beds</div><div style={{ fontWeight: 700, fontSize: 18 }}>3</div></div>
                            <div><div style={{ color: '#6b7280', fontWeight: 500 }}>Baths</div><div style={{ fontWeight: 700, fontSize: 18 }}>2</div></div>
                            <div><div style={{ color: '#6b7280', fontWeight: 500 }}>Area</div><div style={{ fontWeight: 700, fontSize: 18 }}>1200 sqft</div></div>
                            <div><div style={{ color: '#6b7280', fontWeight: 500 }}>Type</div><div style={{ fontWeight: 700, fontSize: 18 }}>Apartment</div></div>
                        </div>
                        {/* About */}
                        <div style={{ marginBottom: 24 }}>
                            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>About this property</div>
                            <div style={{ color: '#374151', fontSize: 16 }}>{apartment.description}</div>
                        </div>
                        {/* Amenities */}
                        <div style={{ marginBottom: 24 }}>
                            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Amenities</div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, fontSize: 16 }}>
                                <div><i className="fas fa-wifi" style={{ marginRight: 8 }}></i>High-speed WiFi</div>
                                <div><i className="fas fa-snowflake" style={{ marginRight: 8 }}></i>Air conditioning</div>
                                <div><i className="fas fa-utensils" style={{ marginRight: 8 }}></i>Fully equipped kitchen</div>
                                <div><i className="fas fa-tv" style={{ marginRight: 8 }}></i>Smart TV</div>
                                <div><i className="fas fa-parking" style={{ marginRight: 8 }}></i>Parking available</div>
                                <div><i className="fas fa-swimming-pool" style={{ marginRight: 8 }}></i>Shared pool</div>
                                <div><i className="fas fa-dumbbell" style={{ marginRight: 8 }}></i>Gym access</div>
                                <div><i className="fas fa-tshirt" style={{ marginRight: 8 }}></i>Washer/Dryer</div>
                            </div>
                        </div>
                        {/* Location */}
                        <div style={{ marginBottom: 24 }}>
                            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Location</div>
                            <div id="map" className="map-placeholder" style={{ marginBottom: 12, borderRadius: 16, overflow: 'hidden' }}>
                                <MapContainer center={[36.7538, 3.0588]} zoom={13} style={{ height: '200px', width: '100%' }}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={[36.7538, 3.0588]}>
                                        <Popup>
                                            {apartment.title}<br />
                                            {apartment.location}
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                            <div style={{ color: '#374151', fontSize: 15 }}>{apartment.location}</div>
                            <div style={{ color: '#4b5563', fontSize: 13 }}>Walk Score: 98 (Walker's Paradise)</div>
                        </div>
                    </div>
                    {/* Right column: Booking card */}
                    <div>
                        <div style={{ boxShadow: '0 2px 8px #0001', borderRadius: 24, background: '#fafbfc', padding: 24, position: 'sticky', top: 32, minWidth: 320 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                                <div style={{ fontWeight: 700, fontSize: 24 }}>{apartment.price}DZ</div>
                                <div style={{ color: '#6b7280', fontSize: 14 }}>per night</div>
                            </div>
                            <div style={{ color: '#facc15', fontSize: 16, marginBottom: 8 }}>
                                <i className="fas fa-star rating-star"></i> 4.9 <span style={{ color: '#6b7280', fontSize: 13 }}>(128 reviews)</span>
                            </div>
                            <form className="booking-form" style={{ marginBottom: 12 }} onSubmit={handleBooking}>
                                <div>
                                    <label style={{ fontWeight: 500, fontSize: 14 }}>Date</label>
                                    <input type="date" value={bookingDate} onChange={e => setBookingDate(e.target.value)} required style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #d1d5db', marginTop: 4 }} />
                                </div>
                                <div>
                                    <label style={{ fontWeight: 500, fontSize: 14 }}>Number of days</label>
                                    <input type="number" min="1" value={days} onChange={e => setDays(e.target.value)} required style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #d1d5db', marginTop: 4 }} />
                                </div>
                                <button type="submit" style={{ width: '100%', background: '#212842', color: 'white', padding: 10, borderRadius: 8, border: 'none', fontWeight: 600, marginTop: 8 }}>Book Now</button>
                            </form>
                            {bookingStatus === 'success' && <div style={{ color: 'green', textAlign: 'center', marginBottom: 8 }}>Booking successful!</div>}
                            {bookingStatus === 'error' && <div style={{ color: 'red', textAlign: 'center', marginBottom: 8 }}>Booking failed. Please try again.</div>}
                            <div style={{ color: '#6b7280', fontSize: 13, textAlign: 'center', marginBottom: 12 }}>You won't be charged yet</div>
                            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 12 }}>
                                <div style={{ fontWeight: 700, marginBottom: 4 }}>Hosted by</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                                    <i className="fas fa-user-circle" style={{ fontSize: 28, color: '#212842' }}></i>
                                    <div>
                                        <div style={{ fontWeight: 700 }}>{apartment.owner_name || 'Alex Rodriguez'}</div>
                                        <div style={{ color: '#6b7280', fontSize: 13 }}>Superhost · 5 years hosting</div>
                                    </div>
                                </div>
                                <button className="contact-host" style={{ width: '100%', border: '1px solid #212842', color: '#212842', padding: 8, borderRadius: 8, background: 'none', fontWeight: 500 }}>Contact Host</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <section className="footer" id="footer">
                <div className="footer-box">
                    <p>GymVast,50th Street,4th <br />Floor,NYC 10022</p>
                    <div className="social">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-twitter'></i></a>
                        <a href="#"><i className='bx bxl-instagram'></i></a>
                        <a href="#"><i className='bx bxl-youtube'></i></a>
                    </div>
                </div>
                <div className="footer-box">
                    <h2>Useful links</h2>
                    <a href="#">About Us</a>
                    <a href="#">FAQs</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div className="footer-box">
                    <h2>Newsletter</h2>
                    <p>Email Newsletter</p>
                    <form>
                        <i className='bx bxs-envelope'></i>
                        <input type="email" placeholder="Enter Your Email" />
                        <i className='bx bx-arrow-back bx-rotate-180'></i>
                    </form>
                </div>
            </section>

            {/* Copyright */}
            <div className="copyright">
                <p>© 2025 DariDz. All rights reserved.</p>
            </div>
        </div>
    );
};

export default ApartmentDetails; 
