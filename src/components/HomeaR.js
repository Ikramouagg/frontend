import React from 'react';
import "boxicons/css/boxicons.min.css";
import './App.css';

const HomeaR = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted.");
  };

  const handlePriceChange = (e, target) => {
    const input = document.querySelector(`input[placeholder="${target}"]`);
    if (input) input.value = e.target.value;
  };
  return (
    <>
      <div className="menu">
     
      <ul className="menu-content">
        <li>
          <a href="#">
            <span className="material-symbols-outlined">home</span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span>DashBoard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined">explore</span>
            <span>Explore</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined">credit_card</span>
            <span>Payments</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined">person</span>
            <span>Account</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined">report</span>
            <span>Report</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined">email</span>
            <span>Contact</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>

      <header>
        <a href="" className="logo">
          <img src="img/bdb606b42e844355dacbc77fcc738923.png" className="imglogo" alt="" />
          <h2>DarDz</h2>
        </a>

        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
          <li><a href="#home" className="home-active">Home</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#about">My Dashboard</a></li>
        </ul>

        <div className="profile">
          <img src="img/profile.jpg" alt="" />
          <span>Abdus Rahman</span>
          <i className='bx bx-caret-down'></i>
        </div>
      </header>
      <section className="products" id="products">
  <div className="products-container">
    {/* box1 */}
    <div className="box">
      <img src="img/p1.png" alt="" />
      <h2>Fresh Items</h2>
      <h3>Farm fresh organic</h3>
      <h1 className="price">40000.00DZD <span>/mounth</span></h1>
      <div className="con-like">
        <input className="like" type="checkbox" title="like" />
        <div className="checkmark">
          <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
            <polygon className="poly" points="10,10 20,20" />
            <polygon className="poly" points="10,50 20,50" />
            <polygon className="poly" points="20,80 30,70" />
            <polygon className="poly" points="90,10 80,20" />
            <polygon className="poly" points="90,50 80,50" />
            <polygon className="poly" points="80,80 70,70" />
          </svg>
        </div>
      </div>
      <span className="discountg">Available</span>
      <hr />
      <div className="icons">
        <div className="i">
          <i className='bx bx-bed'> 2 </i>
          <p>bedrooms</p>
        </div>
        <div className="i">
          <i className='bx bx-bath'> 1 </i>
          <p>bathrooms</p>
        </div>
        <div className="i">
          <i className='bx bx-expand'> 115 </i>
          <p>total area</p>
        </div>
        <div className="i">
          <i className='bx bx-home-alt'> 0 </i>
          <p>garages</p>
        </div>
      </div>
    </div>

    {/* box2 */}
    <div className="box">
      <img src="img/p2.png" alt="" />
      <h2>Fresh Items</h2>
      <h3>Farm fresh organic</h3>
      <h1 className="price">7500.00ZDZ<span>/one night. </span></h1>
      <div className="con-like">
        <input className="like" type="checkbox" title="like" />
        <div className="checkmark">
          <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
            <polygon className="poly" points="10,10 20,20" />
            <polygon className="poly" points="10,50 20,50" />
            <polygon className="poly" points="20,80 30,70" />
            <polygon className="poly" points="90,10 80,20" />
            <polygon className="poly" points="90,50 80,50" />
            <polygon className="poly" points="80,80 70,70" />
          </svg>
        </div>
      </div>
      <span className="discountg">Available</span>
      <hr />
      <div className="icons">
        <div className="i">
          <i className='bx bx-bed'> 2 </i>
          <p>bedrooms</p>
        </div>
        <div className="i">
          <i className='bx bx-bath'> 1 </i>
          <p>bathrooms</p>
        </div>
        <div className="i">
          <i className='bx bx-expand'> 115 </i>
          <p>total area</p>
        </div>
        <div className="i">
          <i className='bx bx-home-alt'> 0 </i>
          <p>garages</p>
        </div>
      </div>
    </div>
    {/* box3 */}
    <div className="box">
        <img src="img/p3.png" alt="" />
        <h2>Fresh Items</h2>
        <h3>Farm fresh organic</h3>
        <h1 className="price">
          Form 3000.00DZD<span>/night.</span>
        </h1>
        {/* From Uiverse.io by waleedlh10 */}
        <div className="con-like">
          <input className="like" type="checkbox" title="like" />
          <div className="checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
              <polygon className="poly" points="10,10 20,20"></polygon>
              <polygon className="poly" points="10,50 20,50"></polygon>
              <polygon className="poly" points="20,80 30,70"></polygon>
              <polygon className="poly" points="90,10 80,20"></polygon>
              <polygon className="poly" points="90,50 80,50"></polygon>
              <polygon className="poly" points="80,80 70,70"></polygon>
            </svg>
          </div>
        </div>
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
        <img src="img/p4.png" alt="" />
        <h2>Lees Creek house</h2>
        <h3>Farm fresh organic</h3>
        <h1 className="price">
          $180000 <span>/mounth</span>
        </h1>
        {/* From Uiverse.io by waleedlh10 */}
        <div className="con-like">
          <input className="like" type="checkbox" title="like" />
          <div className="checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
              <polygon className="poly" points="10,10 20,20"></polygon>
              <polygon className="poly" points="10,50 20,50"></polygon>
              <polygon className="poly" points="20,80 30,70"></polygon>
              <polygon className="poly" points="90,10 80,20"></polygon>
              <polygon className="poly" points="90,50 80,50"></polygon>
              <polygon className="poly" points="80,80 70,70"></polygon>
            </svg>
          </div>
        </div>
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
          {/* Box 5 */}
          <div className="box">
        <img src="img/p5.png" alt="" />
        <h2>Scotch Plains villa</h2>
        <h3>Farm fresh organic</h3>
        <h1 className="price">$160000<span>/mounth</span></h1>

        <div className="con-like">
          <input className="like" type="checkbox" title="like" />
          <div className="checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3..."></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3..."></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
              <polygon className="poly" points="10,10 20,20" />
              <polygon className="poly" points="10,50 20,50" />
              <polygon className="poly" points="20,80 30,70" />
              <polygon className="poly" points="90,10 80,20" />
              <polygon className="poly" points="90,50 80,50" />
              <polygon className="poly" points="80,80 70,70" />
            </svg>
          </div>
        </div>

        <span className="discountr">Available</span>
        <hr />
        <div className="icons">
          <div className="i">
            <i className='bx bx-bed'> 2 </i>
            <p>bedrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-bath'> 1 </i>
            <p>bathrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-expand'> 115 </i>
            <p>total area</p>
          </div>
          <div className="i">
            <i className='bx bx-home-alt'> 0 </i>
            <p>garages</p>
          </div>
        </div>
      </div>

      {/* Box 6 */}
      <div className="box">
        <img src="img/p6.png" alt="" />
        <h2>Rockville Ave villa</h2>
        <h3>Farm fresh organic</h3>
        <h1 className="price">$210000<span>/mounth</span></h1>

        <div className="con-like">
          <input className="like" type="checkbox" title="like" />
          <div className="checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3..."></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3..."></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
              <polygon className="poly" points="10,10 20,20" />
              <polygon className="poly" points="10,50 20,50" />
              <polygon className="poly" points="20,80 30,70" />
              <polygon className="poly" points="90,10 80,20" />
              <polygon className="poly" points="90,50 80,50" />
              <polygon className="poly" points="80,80 70,70" />
            </svg>
          </div>
        </div>

        <span className="discountg">Available</span>
        <hr />
        <div className="icons">
          <div className="i">
            <i className='bx bx-bed'> 2 </i>
            <p>bedrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-bath'> 1 </i>
            <p>bathrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-expand'> 115 </i>
            <p>total area</p>
          </div>
          <div className="i">
            <i className='bx bx-home-alt'> 0 </i>
            <p>garages</p>
          </div>
        </div>
      </div>

      {/* Box 7 */}
      <div className="box">
        <img src="img/p6.png" alt="" />
        <h2>Rockville Ave condominium</h2>
        <h3>Farm fresh organic</h3>
        <h1 className="price">$120000 <span>/mounth</span></h1>

        <div className="con-like">
          <input className="like" type="checkbox" title="like" />
          <div className="checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3..."></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3..."></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
              <polygon className="poly" points="10,10 20,20" />
              <polygon className="poly" points="10,50 20,50" />
              <polygon className="poly" points="20,80 30,70" />
              <polygon className="poly" points="90,10 80,20" />
              <polygon className="poly" points="90,50 80,50" />
              <polygon className="poly" points="80,80 70,70" />
            </svg>
          </div>
        </div>

        <span className="discountg">Available</span>
        <hr />
        <div className="icons">
          <div className="i">
            <i className='bx bx-bed'> 2 </i>
            <p>bedrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-bath'> 1 </i>
            <p>bathrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-expand'> 115 </i>
            <p>total area</p>
          </div>
          <div className="i">
            <i className='bx bx-home-alt'> 0 </i>
            <p>garages</p>
          </div>
        </div>
      </div>
       {/* box8 */}
       <div className="box">
        <img src="img/p3.png" alt="" />
        <h2>Fresh Items</h2>
        <h3>Farm fresh organic</h3>
        <h1 className="price">$7.99 <span>/month</span></h1>

        {/* Like button (from Uiverse.io by waleedlh10) */}
        <div className="con-like">
          <input className="like" type="checkbox" title="like" />
          <div className="checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3...Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3...Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
              <polygon className="poly" points="10,10 20,20" />
              <polygon className="poly" points="10,50 20,50" />
              <polygon className="poly" points="20,80 30,70" />
              <polygon className="poly" points="90,10 80,20" />
              <polygon className="poly" points="90,50 80,50" />
              <polygon className="poly" points="80,80 70,70" />
            </svg>
          </div>
        </div>

        <span className="discountg">Available</span>
        <hr />
        <div className="icons">
          <div className="i">
            <i className='bx bx-bed'> 2 </i>
            <p>bedrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-bath'> 1 </i>
            <p>bathrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-expand'> 115 </i>
            <p>total area</p>
          </div>
          <div className="i">
            <i className='bx bx-home-alt'> 0 </i>
            <p>garages</p>
          </div>
        </div>
      </div>

      {/* box9 */}
      <div className="box">
        <img src="img/p5.png" alt="" />
        <h2>Fresh Items</h2>
        <h3>Farm fresh organic</h3>
        <h1 className="price">$7.99 <span>/month</span></h1>

        <div className="con-like">
          <input className="like" type="checkbox" title="like" />
          <div className="checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3...Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3...Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
              <polygon className="poly" points="10,10 20,20" />
              <polygon className="poly" points="10,50 20,50" />
              <polygon className="poly" points="20,80 30,70" />
              <polygon className="poly" points="90,10 80,20" />
              <polygon className="poly" points="90,50 80,50" />
              <polygon className="poly" points="80,80 70,70" />
            </svg>
          </div>
        </div>

        <span className="discountg">Available</span>
        <hr />
        <div className="icons">
          <div className="i">
            <i className='bx bx-bed'> 2 </i>
            <p>bedrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-bath'> 1 </i>
            <p>bathrooms</p>
          </div>
          <div className="i">
            <i className='bx bx-expand'> 115 </i>
            <p>total area</p>
          </div>
          <div className="i">
            <i className='bx bx-home-alt'> 0 </i>
            <p>garages</p>
          </div>
        </div>
      </div>
      </div>
      
      {/* Pagination */}
      <div className="pagination-container">
        <nav className="pagination">
          <a href="#" className="page-link prev">
            <span>&laquo;</span>
          </a>
          <a href="#" className="page-link active">1</a>
          <a href="#" className="page-link">2</a>
          <a href="#" className="page-link">3</a>
          <a href="#" className="page-link next">
            <span>&raquo;</span>
          </a>
        </nav>
      </div>

      {/* Footer */}
      <section className="footer" id="footer">
        <div className="footer-box">
          <p>GymVast, 50th Street, 4th <br /> Floor, NYC 10022</p>
          <div className="social">
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-youtube'></i></a>
          </div>
        </div>

        <div className="footer-box">
          <h2>Usefull links</h2>
          <a href="#">About Us</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="footer-box">
          <h2>Newsletter</h2>
          <p><br />Email Newsletter</p>
          <form onSubmit={handleFormSubmit}>
            <i className='bx bxs-envelope'></i>
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit" style={{ background: "none", border: "none" }}>
              <i className='bx bx-arrow-back bx-rotate-180'></i>
            </button>
          </form>
        </div>
      </section>

      {/* Copyright */}
      <div className="copyright">
        <p>&#169; PalmTree All Right Reserved.</p>
      </div>

      {/* Filter script simulation */}
      <div style={{ display: "none" }}>
        <input id="kawaii1" type="range" onInput={(e) => handlePriceChange(e, "Min")} />
        <input id="kawaii2" type="range" onInput={(e) => handlePriceChange(e, "Max")} />
        <input placeholder="Min" />
        <input placeholder="Max" />
      </div>
      </section>
    </>
  );
};

export default HomeaR;
