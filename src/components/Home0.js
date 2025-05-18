import React from "react";
import '../css/style.css';
import "boxicons/css/boxicons.min.css";
import 'swiper/css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
  
    <>
      {/* start header */}
      <div className="home"></div>
      <header>
        <div className="logo">
          <img
            src="img/bdb606b42e844355dacbc77fcc738923.png"
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
            <a href="#customers" style={{ marginLeft: 10, marginRight: 10 }}>
              Customers
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
          <div
         className="login-button"
         onClick={() => navigate("/login")}
         style={{ cursor: "pointer" }}
>
            <i className="bx bx-user"></i>
            <span className="divider"></span>
            <span className="text">Login</span>
          </div>
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
        <button className="cta">
          <i className="bx bx-plus-circle"></i>
          Add Property
        </button>
        <div className="hh">
          <div className="hh1"></div>
          <img
            src="img/Untitled – Figma - Google Chrome 07_04_2025 14_33_22.png"
            className="ih"
            alt=""
          />
        </div>
      </header>
      {/* end header */}

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
          {/* box1 */}
          <div className="box">
            <img src="img/p1.jpg" alt="" />
            <h2>Fresh Items</h2>
            <h3>Farm fresh organic</h3>
            <h1 className="price">
              40000.00DZD <span>/mounth</span>
            </h1>
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-heart"></i>
            <span className="discountg">Available</span>
            <hr />
            <div className="icons">
              <div className="i">
                <i className="bx bx-bed"> 2 </i>
                <p>bedrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-bath"> 1 </i>
                <p>bathrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-expand"> 115 </i>
                <p>total area</p>
              </div>
              <div className="i">
                <i className="bx bx-home-alt"> 0 </i>
                <p>garages</p>
              </div>
            </div>
          </div>

          {/* box2 */}
          <div className="box">
            <img src="img/p2.jpg" alt="" />
            <h2>Fresh Items</h2>
            <h3>Farm fresh organic</h3>
            <h1 className="price">
              7500.00ZDZ<span>/one night. </span>
            </h1>
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-heart"></i>
            <span className="discountg">Available</span>
            <hr />
            <div className="icons">
              <div className="i">
                <i className="bx bx-bed"> 2 </i>
                <p>bedrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-bath"> 1 </i>
                <p>bathrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-expand"> 115 </i>
                <p>total area</p>
              </div>
              <div className="i">
                <i className="bx bx-home-alt"> 0 </i>
                <p>garages</p>
              </div>
            </div>
          </div>

          {/* box3 */}
          <div className="box">
            <img src="img/p3.jpg" alt="" />
            <h2>Fresh Items</h2>
            <h3>Farm fresh organic</h3>
            <h1 className="price">
              Form 3000.00DZD<span>/night.</span>
            </h1>
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-heart"></i>
            <span className="discountr">Available</span>
            <hr />
            <div className="icons">
              <div className="i">
                <i className="bx bx-bed"> 2 </i>
                <p>bedrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-bath"> 1 </i>
                <p>bathrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-expand"> 115 </i>
                <p>total area</p>
              </div>
              <div className="i">
                <i className="bx bx-home-alt"> 0 </i>
                <p>garages</p>
              </div>
            </div>
          </div>

          {/* box4 */}
          <div className="box">
            <img src="img/p4.jpg" alt="" />
            <h2>Lees Creek house</h2>
            <h3>Farm fresh organic</h3>
            <h1 className="price">
              $180000 <span>/mounth</span>
            </h1>
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-heart"></i>
            <span className="discountg">Available</span>
            <hr />
            <div className="icons">
              <div className="i">
                <i className="bx bx-bed"> 2 </i>
                <p>bedrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-bath"> 1 </i>
                <p>bathrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-expand"> 115 </i>
                <p>total area</p>
              </div>
              <div className="i">
                <i className="bx bx-home-alt"> 0 </i>
                <p>garages</p>
              </div>
            </div>
          </div>

          {/* box5 */}
          <div className="box">
            <img src="img/p1.jpg" alt="" />
            <h2>Scotch Plains villa</h2>
            <h3>Farm fresh organic</h3>
            <h1 className="price">
              $160000<span>/mounth</span>
            </h1>
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-heart"></i>
            <span className="discountr">Available</span>
            <hr />
            <div className="icons">
              <div className="i">
                <i className="bx bx-bed"> 2 </i>
                <p>bedrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-bath"> 1 </i>
                <p>bathrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-expand"> 115 </i>
                <p>total area</p>
              </div>
              <div className="i">
                <i className="bx bx-home-alt"> 0 </i>
                <p>garages</p>
              </div>
            </div>
          </div>

          {/* box6 */}
          <div className="box">
            <img src="img/p2.jpg" alt="" />
            <h2>Rockville Ave villa</h2>
            <h3>Farm fresh organic</h3>
            <h1 className="price">
              $210000<span>/mounth</span>
            </h1>
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-heart"></i>
            <span className="discountg">Available</span>
            <hr />
            <div className="icons">
              <div className="i">
                <i className="bx bx-bed"> 2 </i>
                <p>bedrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-bath"> 1 </i>
                <p>bathrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-expand"> 115 </i>
                <p>total area</p>
              </div>
              <div className="i">
                <i className="bx bx-home-alt"> 0 </i>
                <p>garages</p>
              </div>
            </div>
          </div>

          {/* box7 */}
          <div className="box">
            <img src="img/p3.jpg" alt="" />
            <h2>Rockville Ave condominium</h2>
            <h3>Farm fresh organic</h3>
            <h1 className="price">
              $120000 <span>/mounth</span>
            </h1>
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-heart"></i>
            <span className="discountg">Available</span>
            <hr />
            <div className="icons">
              <div className="i">
                <i className="bx bx-bed"> 2 </i>
                <p>bedrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-bath"> 1 </i>
                <p>bathrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-expand"> 115 </i>
                <p>total area</p>
              </div>
              <div className="i">
                <i className="bx bx-home-alt"> 0 </i>
                <p>garages</p>
              </div>
            </div>
          </div>

          {/* box8 */}
          <div className="box">
            <img src="img/p4.jpg" alt="" />
            <h2>Fresh Items</h2>
            <h3>Farm fresh organic</h3>
            <h1 className="price">
              $7.99 <span>/mounth</span>
            </h1>
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-heart"></i>
            <span className="discountg">Available</span>
            <hr />
            <div className="icons">
              <div className="i">
                <i className="bx bx-bed"> 2 </i>
                <p>bedrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-bath"> 1 </i>
                <p>bathrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-expand"> 115 </i>
                <p>total area</p>
              </div>
              <div className="i">
                <i className="bx bx-home-alt"> 0 </i>
                <p>garages</p>
              </div>
            </div>
          </div>

          {/* box9 */}
          <div className="box">
            <img src="img/p1.jpg" alt="" />
            <h2>Fresh Items</h2>
            <h3>Farm fresh organic</h3>
            <h1 className="price">
              $7.99 <span>/mounth</span>
            </h1>
            <i className="bx bx-cart-alt"></i>
            <i className="bx bx-heart"></i>
            <span className="discountg">Available</span>
            <hr />
            <div className="icons">
              <div className="i">
                <i className="bx bx-bed"> 2 </i>
                <p>bedrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-bath"> 1 </i>
                <p>bathrooms</p>
              </div>
              <div className="i">
                <i className="bx bx-expand"> 115 </i>
                <p>total area</p>
              </div>
              <div className="i">
                <i className="bx bx-home-alt"> 0 </i>
                <p>garages</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end products */}

      {/* end Main section */}

      <section className="about" id="about">
  <img src="img/about.png" alt="" />
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
        <img src="img/c1.png" alt="" />
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
        <img src="img/c2.jpg" alt="" />
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
        <img src="img/c3.jpg" alt="" />
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
