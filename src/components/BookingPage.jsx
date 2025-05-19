import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';
import "boxicons/css/boxicons.min.css";

const BookingPage = () => {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        const fetchBookings = async () => {
            if (!user?.id && !user?.tenant_id) return;
            
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:3000/booking/tenant/${user.id || user.tenant_id}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        // No bookings found is not an error
                        setBookings([]);
                        return;
                    }
                    throw new Error('Failed to fetch bookings');
                }
                const data = await response.json();
                setBookings(data.bookings || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchBookings();
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    if (loading) return <div className="loading">Loading your bookings...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!user) return <div className="error">Please login to view your bookings</div>;

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

            {/* Main Content */}
            <div style={{ maxWidth: 1200, margin: '48px auto 0 auto', borderRadius: 40, boxShadow: '0 8px 32px #0002', background: '#fff', padding: 32 }}>
                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24 }}>Your Bookings</h1>
                
                {bookings.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '48px 0' }}>
                        <div style={{ fontSize: 18, color: '#6b7280', marginBottom: 16 }}>You haven't made any bookings yet</div>
                        <button 
                            onClick={() => navigate('/')}
                            style={{ 
                                background: '#212842', 
                                color: 'white', 
                                padding: '12px 24px', 
                                borderRadius: 8, 
                                border: 'none', 
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}
                        >
                            Browse Apartments
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gap: 24 }}>
                        {bookings.map((booking) => (
                            <div key={booking.id} style={{ 
                                display: 'grid', 
                                gridTemplateColumns: '1fr 2fr 1fr', 
                                gap: 24, 
                                padding: 24, 
                                borderRadius: 16, 
                                background: '#fafbfc',
                                boxShadow: '0 2px 8px #0001'
                            }}>
                                <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                                    <img 
                                        src={booking.primary_image || 'https://picsum.photos/300/200'} 
                                        alt={booking.apartment_title} 
                                        style={{ width: '100%', height: 200, objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{booking.apartment_title}</h2>
                                    <div style={{ color: '#6b7280', marginBottom: 16 }}>{booking.location}</div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                                        <div>
                                            <div style={{ color: '#6b7280', fontSize: 14 }}>Check-in</div>
                                            <div style={{ fontWeight: 500 }}>{new Date(booking.booking_date).toLocaleDateString()}</div>
                                        </div>
                                        <div>
                                            <div style={{ color: '#6b7280', fontSize: 14 }}>Duration</div>
                                            <div style={{ fontWeight: 500 }}>{booking.days} days</div>
                                        </div>
                                        <div>
                                            <div style={{ color: '#6b7280', fontSize: 14 }}>Price per night</div>
                                            <div style={{ fontWeight: 500 }}>{booking.price}DZ</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                                    <div style={{ 
                                        padding: '6px 12px', 
                                        borderRadius: 20, 
                                        background: booking.status === 'Confirmed' ? '#dcfce7' : '#fee2e2',
                                        color: booking.status === 'Confirmed' ? '#166534' : '#991b1b',
                                        fontWeight: 500,
                                        fontSize: 14
                                    }}>
                                        {booking.status}
                                    </div>
                                    <div style={{ color: '#6b7280', fontSize: 14 }}>Hosted by {booking.owner_name}</div>
                                    <a 
                                        href={`/apartments/${booking.apartment_id}`}
                                        style={{ 
                                            padding: '8px 16px', 
                                            borderRadius: 8, 
                                            border: '1px solid #212842',
                                            background: 'none',
                                            color: '#212842',
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            textAlign: 'center'
                                        }}
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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

export default BookingPage; 