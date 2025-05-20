import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/style.css';
import "boxicons/css/boxicons.min.css";
import 'swiper/css';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Fetch apartments
    const fetchApartments = async () => {
      try {
        const response = await fetch('http://localhost:3000/listapart');
        if (!response.ok) {
          throw new Error('Failed to fetch apartments');
        }
        const data = await response.json();
        setApartments(data.apartments);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApartments();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <>
      {/* start header */}
      <div className="home"></div>
      <header>
        <div className="logo">
          <img
            src="/logo.png"
            className="imglogo"
            alt=""
          />
          <h2>DarDz</h2>
        </div>
        <div className="tt">
          <div className="tt1">
            <a href="#home" className="home-active">
              Home
            </a>
            <a href="#products" style={{ marginLeft: 10, marginRight: 10 }}>
              Apartements
            </a>
            <a href="#about" style={{ marginLeft: 10, marginRight: 10 }}>
              About
            </a>
            <a href="/booking" style={{ marginLeft: 10, marginRight: 10 }}>
              MyBookings
            </a>
          </div>
          <div className="tt2">
            <div className="ii">
              <i
                className="bx bx-globe"
                style={{ marginLeft: 1, marginRight: 25, marginTop: 5 }}
              ></i>
            </div>
          </div>
          {user ? (
            <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{user.name}</span>
              <div
                className="logout-button"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                <i className="bx bx-log-out"></i>
                <span className="divider"></span>
                <span className="text">Logout</span>
              </div>
            </div>
          ) : (
            <div
              className="login-button"
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
            >
              <i className="bx bx-user"></i>
              <span className="divider"></span>
              <span className="text">Login</span>
            </div>
          )}
        </div>
        <span className="tt3"></span>
        <div className="tg">
          <h1>Find , Rent , Enjoy</h1>
          <h3>
            Seamless property search with trusted listings. Your next home is
            just a click away
          </h3>
        </div>
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search for a city, a province, or a region ..."
          />
          <button className="search__button search__buttonsi">
            <i className="bx bx-search-alt-2 search__icon"></i>
          </button>
        </div>
        {user && user.role === 'Owner' && (
          <button className="cta">
             <a href="/publish">
            <i className="bx bx-plus-circle"></i>
            Add Property
             </a>
          </button>
        )}
        <div className="hh">
          <div className="hh1"></div>
          <img
            src="/back.png"
            className="ih"
            alt=""
          />
        </div>
      </header>
      {/* end header */}

      
 {/* Owner's Apartments Section */}
 {user && user.role === 'Owner' && (
        <section>
          <div className="header-line">
            <h1>My Properties</h1>
            <hr />
          </div>
          <section className="products" id="owner-products">
            <div className="products-container">
              {loading ? (
                <div className="loading">Loading your properties...</div>
              ) : error ? (
                <div className="error">{error}</div>
              ) : (
                apartments
                  .filter(apartment => apartment.owner_id === user.id)
                  .map((apartment) => (
                    <div 
                      className="box" 
                      key={apartment.id}
                      onClick={() => navigate(`/apartments/${apartment.id}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={apartment.primary_image} alt={apartment.title} />
                      <h2>{apartment.title}</h2>
                      <h3>{apartment.location}</h3>
                      <h1 className="price">
                        {apartment.price}DZD <span>/month</span>
                      </h1>
                      <i className="bx bx-cart-alt"></i>
                      <i className="bx bx-heart"></i>
                      <span className="discountg">Available</span>
                      <hr />
                      <div className="icons">
                        <div className="i">
                          <i className="bx bx-user"> {apartment.owner_name} </i>
                          <p>Owner</p>
                        </div>
                        <div className="i">
                          <i className="bx bx-map"> {apartment.location} </i>
                          <p>Location</p>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </section>
        </section>
      )}

{/* start Main section */}
<section>
        <div className="header-line">
          <h1>Rental Offers</h1>
          <hr />
        </div>
      </section>


      {/* start products */}
      <section className="products" id="products">
        <div className="products-container">
          {loading ? (
            <div className="loading">Loading apartments...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            apartments.map((apartment) => (
              <div 
                className="box" 
                key={apartment.id}
                onClick={() => navigate(`/apartments/${apartment.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img src={apartment.primary_image} alt={apartment.title} />
                <h2>{apartment.title}</h2>
                <h3>{apartment.location}</h3>
                <h1 className="price">
                  {apartment.price}DZD <span>/month</span>
                </h1>
                <i className="bx bx-cart-alt"></i>
                <i className="bx bx-heart"></i>
                <span className="discountg">Available</span>
                <hr />
                <div className="icons">
                  <div className="i">
                    <i className="bx bx-user"> {apartment.owner_name} </i>
                    <p>Owner</p>
                  </div>
                  <div className="i">
                    <i className="bx bx-map"> {apartment.location} </i>
                    <p>Location</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      {/* end products */}

     

      {/* end Main section */}

      <section className="about" id="about">
        <img src="/key.png" alt="" />
        <div className="about-text">
          <span>About Us</span>
          <p>
            At DariDz, we provide a smart and secure platform that connects property owners with renters easily and transparently. Our goal is to simplify the rental experience through a user-friendly interface, advanced search, and multi-language support—helping you find your perfect home quickly and confidently.
          </p>
          <a href="#" className="btn">
            Learn More <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </section>

      <section className="customers" id="customers">
        <h2>Why Customer's Love Us ?</h2>
        {/* customers content */}
        <div className="customers-container">
          {/* review 01 */}
          <div className="box">
            <i className="bx bxs-quote-alt-left"></i>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione quod est error quae. Itaque, id.</p>
            <div className="review-profile">
              <img src="c1.png" alt="" />
              <h3>Ethan smith</h3>
            </div>
          </div>
          {/* review 02 */}
          <div className="box">
            <i className="bx bxs-quote-alt-left"></i>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione quod est error quae. Itaque, id.</p>
            <div className="review-profile">
              <img src="c2.jpg" alt="" />
              <h3>Ethan smith</h3>
            </div>
          </div>
          {/* review 03 */}
          <div className="box">
            <i className="bx bxs-quote-alt-left"></i>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione quod est error quae. Itaque, id.</p>
            <div className="review-profile">
              <img src="c3.jpg" alt="" />
              <h3>Ethan smith</h3>
            </div>
          </div>
        </div>
      </section>

      {/* start footer */}
      <section className="footer" id="footer">
        <div className="footer-box">
          <p>
            GymVast,50th Street,4th <br />Floor,NYC 10022
          </p>
          <div className="social">
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-instagram"></i></a>
            <a href="#"><i className="bx bxl-youtube"></i></a>
          </div>
        </div>
        <div className="footer-box">
          <h2>Usefull links</h2>
          <a href="#">About Us</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
        <div className="footer-box">
          <h2>Newsletter</h2>
          <p> <br />Email Newsletter</p>
          <form>
            <i className="bx bxs-envelope"></i>
            <input type="email" placeholder="Enter Your Email" />
            <i className="bx bx-arrow-back bx-rotate-180"></i>
          </form>
        </div>
      </section>
      {/* end footer */}

      {/* start copyright */}
      <div className="copyright">
        <p>© 2025 DariDz. All rights reserved.</p>
      </div>
      {/* end copyright */}
    </>
  );
};

export default Home; 