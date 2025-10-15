// Fix: Replaced invalid placeholder text with a basic React application structure to resolve parsing errors.
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- Reusable Components ---

const CateringPackage = ({ title, items }) => (
  <div className="leaf-menu fade-in-on-scroll">
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// --- Page Section Components ---

const Header = ({ activeSection, onNavClick }) => {
  const navLinks = ['Home', 'About', 'Menu', 'Contact'];
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="logo">Sundharaj Catering</h1>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={activeSection === link.toLowerCase() ? 'active' : ''}
                  onClick={(e) => onNavClick(e, `#${link.toLowerCase()}`)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const HomePage = ({ onCTAClick }) => (
  <section id="home" className="hero-section">
    <div className="hero-content">
      <h2>Sundharaj Catering – Authentic South Indian Meals for Every Occasion</h2>
      <p>Delicious Breakfast, Lunch & Dinner – Fresh, Traditional & Homemade</p>
      <a href="#menu" className="btn" onClick={(e) => onCTAClick(e, '#menu')}>View Menu</a>
    </div>
  </section>
);

const AboutSection = () => (
    <section id="about" className="about-section fade-in-on-scroll">
        <div className="container">
            <h2>Authentic Taste of South India</h2>
            <p>
                Sundharaj Catering brings generations of culinary tradition right to your table. We specialize in authentic South Indian cuisine, crafted with the freshest ingredients and a passion for flavor. From intimate family gatherings to grand celebrations, we make every occasion a memorable feast.
            </p>
        </div>
    </section>
);


const MenuSection = () => {
    const morningItems = ["Idli with Sambar & Chutney", "Masala Dosa", "Pongal", "Medu Vada", "Upma"];
    const afternoonItems = ["Sambar Rice", "Rasam Rice", "Lemon Rice", "Coconut Rice", "Avial", "Poriyal (Dry Curry)", "Papad"];
    const nightItems = ["South Indian Thali (Full Meal)", "Vegetable Pulao", "Paneer Butter Masala", "Chapati / Parotta", "Payasam (Sweet Dish)"];

    return (
        <section id="menu" className="menu-section">
            <div className="container">
                <div className="section-header fade-in-on-scroll">
                    <h2>Our Catering Packages</h2>
                    <p>Tailored menus to make your event special, whether it's a bright morning, a sunny afternoon, or a festive night.</p>
                </div>
                <div className="catering-packages-grid">
                    <CateringPackage title="Morning Event" items={morningItems} />
                    <CateringPackage title="Afternoon Feast" items={afternoonItems} />
                    <CateringPackage title="Evening Celebration" items={nightItems} />
                </div>
            </div>
        </section>
    );
};


const ContactSection = () => {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'sending', 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container fade-in-on-scroll">
        <h2>Book Your Catering Today!</h2>
        <div className="contact-content">
          <div className="contact-form-container">
            {formStatus === 'success' ? (
              <div className="form-success-message">
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                  <input type="text" name="event_type" placeholder="Type of Event" required />
                </div>
                <div className="form-group">
                    <input type="date" name="date" placeholder="Event Date" required />
                </div>
                {/* Fix: The `rows` attribute for a textarea in React expects a number. Changed "5" to {5}. */}
                <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
                <button type="submit" className="btn" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          <div className="contact-details">
            <h3>Contact Info</h3>
            <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
            <p><strong>Email:</strong> info@sundharajcatering.com</p>
            <p><strong>Service Area:</strong> Chennai, Tamil Nadu</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" aria-label="WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const Footer = () => (
    <footer className="main-footer">
        <div className="container">
            <p>&copy; {new Date().getFullYear()} Sundharaj Catering. All Rights Reserved.</p>
        </div>
    </footer>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
    </button>
  );
};


// --- Main App Component ---

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const observer = useRef(null);

  useEffect(() => {
      // Scroll animations observer
      const animationObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              animationObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll('.fade-in-on-scroll');
      elements.forEach((el) => animationObserver.observe(el));

      // Nav highlighting observer
      observer.current = new IntersectionObserver((entries) => {
          const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id;
          if (visibleSection) {
              setActiveSection(visibleSection);
          }
      }, { rootMargin: '-20% 0px -80% 0px', threshold: 0 });

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
          observer.current.observe(section);
      });

      return () => {
          sections.forEach((section) => {
              observer.current.unobserve(section);
          });
          elements.forEach((el) => animationObserver.unobserve(el));
      };
  }, []);


  const handleNavClick = (e, targetId) => {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  };

  return (
    <>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        <HomePage onCTAClick={handleNavClick} />
        <AboutSection />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
    console.error('Root element with id "root" not found in the document.');
}