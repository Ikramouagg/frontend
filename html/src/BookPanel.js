
import React, { useEffect } from 'react';
import './App.css';
import 'boxicons/css/boxicons.min.css';

const BookPlan = () => {
  useEffect(() => {
    // Plan card click
    const planCards = document.querySelectorAll('.plan-card');

    planCards.forEach((card) => {
      card.addEventListener('click', function (e) {
        if (!e.target.classList.contains('subscribe-btn')) {
          this.querySelector('.subscribe-btn').click();
        }
      });
    });

    // Subscribe buttons
    const upgradeButtons = document.querySelectorAll('.subscribe-btn:not(.current-plan)');
    upgradeButtons.forEach((button) => {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
        const planTitle = this.closest('.plan-card').querySelector('.title').textContent;
        alert(`You selected the ${planTitle} plan. Payment processing would be implemented here.`);
      });
    });

    // FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((question) => {
      question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('i');

        if (answer.style.display === 'none' || !answer.style.display) {
          answer.style.display = 'block';
          icon.classList.remove('bx-chevron-down');
          icon.classList.add('bx-chevron-up');
        } else {
          answer.style.display = 'none';
          icon.classList.remove('bx-chevron-up');
          icon.classList.add('bx-chevron-down');
        }
      });
    });
  }, []);

  return (
    <div>
      <header>
        <a href="/" className="logo">
          <img src="img/bdb606b42e844355dacbc77fcc738923.png" className="imglogo" alt="" />
          <h2>DarDz</h2>
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>
        <ul className="navbar">
          <li><a href="C:\\Users\\Dell\\Desktop\\test\\index.html">Home</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#about">My Dashboard</a></li>
        </ul>
        <div className="profile">
          <img src="img/profile.jpg" alt="" />
          <span>Abdus Rahman</span>
          <i className="bx bx-caret-down"></i>
        </div>
      </header>

      <main style={{ marginTop: '100px', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#212842' }}>Choose Your Plan</h1>

        <div className="plans-container">
          {/* Free Plan */}
          <div className="plan-card">
            <p className="title">Free</p>
            <p className="price">0DZ<span>/month</span></p>
            <ul className="features">
              <li><i className="bx bx-check"></i> Basic property search</li>
              <li><i className="bx bx-check"></i> Limited booking requests</li>
              <li><i className="bx bx-check"></i> Basic messaging</li>
              <li><i className="bx bx-check"></i> Manual payments</li>
            </ul>
            <button className="subscribe-btn current-plan">Current Plan</button>
          </div>

          {/* Premium Plan */}
          <div className="plan-card highlight-card">
            <div className="ribbon">POPULAR</div>
            <p className="title">Premium</p>
            <p className="price">20.00DZ<span>/month</span></p>
            <ul className="features">
              <li><i className="bx bx-check"></i> Priority booking</li>
              <li><i className="bx bx-check"></i> Instant booking</li>
              <li><i className="bx bx-check"></i> Verified profile</li>
              <li><i className="bx bx-check"></i> Unlimited messaging</li>
              <li><i className="bx bx-check"></i> Secure payments</li>
              <li><i className="bx bx-check"></i> Booking protection</li>
            </ul>
            <button className="subscribe-btn">Upgrade Now</button>
          </div>

          {/* Business Plan */}
          <div className="plan-card">
            <p className="title">Business</p>
            <p className="price">25.00DZ<span>/month</span></p>
            <ul className="features">
              <li><i className="bx bx-check"></i> Up to 5 properties</li>
              <li><i className="bx bx-check"></i> Automated payments</li>
              <li><i className="bx bx-check"></i> Booking management</li>
              <li><i className="bx bx-check"></i> Tenant screening</li>
              <li><i className="bx bx-check"></i> Premium visibility</li>
              <li><i className="bx bx-check"></i> Analytics dashboard</li>
              <li><i className="bx bx-check"></i> Premium support</li>
            </ul>
            <button className="subscribe-btn">Get Started</button>
          </div>
        </div>
      </main>

      {/* Payment Features */}
      <div className="features-section" style={{ padding: '50px 100px', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--blue-color)' }}>Secure Payment Features</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div className="feature-card" style={featureStyle}>
            <i className="bx bx-lock-alt" style={iconStyle}></i>
            <h3>Secure Transactions</h3>
            <p>Encrypted payments with temporary fund holding until move-in confirmation</p>
          </div>
          <div className="feature-card" style={featureStyle}>
            <i className="bx bx-credit-card" style={iconStyle}></i>
            <h3>Multiple Options</h3>
            <p>Credit cards, bank transfers, and digital wallets supported</p>
          </div>
          <div className="feature-card" style={featureStyle}>
            <i className="bx bx-calendar" style={iconStyle}></i>
            <h3>Automated Features</h3>
            <p>Rent reminders, receipt generation, and late fee calculations</p>
          </div>
          <div className="feature-card" style={featureStyle}>
            <i className="bx bx-shield" style={iconStyle}></i>
            <h3>Dispute Resolution</h3>
            <p>Mediation services and optional damage deposit protection</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ padding: '50px 100px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--blue-color)' }}>Frequently Asked Questions</h2>
        <div className="faq-item" style={faqItemStyle}>
          <div className="faq-question" style={faqQuestionStyle}>
            <span>How do I cancel my subscription?</span>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div className="faq-answer" style={faqAnswerStyle}>
            You can cancel anytime from your dashboard. Your subscription will remain active until the end of the current billing period.
          </div>
        </div>
        <div className="faq-item" style={faqItemStyle}>
          <div className="faq-question" style={faqQuestionStyle}>
            <span>What payment methods do you accept?</span>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div className="faq-answer" style={faqAnswerStyle}>
            We accept all major credit cards, PayPal, and bank transfers for subscription payments. Rental payments can also be made via digital wallets.
          </div>
        </div>
        <div className="faq-item" style={faqItemStyle}>
          <div className="faq-question" style={faqQuestionStyle}>
            <span>Is there a free trial for premium plans?</span>
            <i className="bx bx-chevron-down"></i>
          </div>
          <div className="faq-answer" style={faqAnswerStyle}>
            Yes! New users get a 14-day free trial of our premium features with no obligation to continue.
          </div>
        </div>
      </div>
    </div>
  );
};

const featureStyle = {
  background: 'white',
  padding: '20px',
  borderRadius: '10px',
  width: '250px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const iconStyle = {
  fontSize: '2rem',
  color: '#212842',
};

const faqItemStyle = {
  marginBottom: '15px',
  borderBottom: '1px solid #eee',
  paddingBottom: '15px',
};

const faqQuestionStyle = {
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
};

const faqAnswerStyle = {
  display: 'none',
  marginTop: '10px',
  color: '#555',
};

export default BookPlan;
