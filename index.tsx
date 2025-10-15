import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

type Page = 'home' | 'menu' | 'contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main>
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'menu' && <MenuPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </>
  );
};

const Header = ({ currentPage, navigateTo }: { currentPage: Page; navigateTo: (page: Page) => void; }) => (
  <header className="app-header">
    <div className="container">
      <div className="logo">Sundharaj Catering</div>
      <nav className="main-nav">
        <ul>
          <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('menu'); }} className={currentPage === 'menu' ? 'active' : ''}>Menu</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className={currentPage === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const HomePage = ({ navigateTo }: { navigateTo: (page: Page) => void; }) => (
  <>
    <section className="hero">
      <div className="hero-content">
        <h1>Sundharaj Catering – Authentic South Indian Meals for Every Occasion</h1>
        <p>Delicious Breakfast, Lunch & Dinner – Fresh, Traditional & Homemade</p>
        <button onClick={() => navigateTo('menu')} className="btn">View Menu</button>
      </div>
    </section>
    
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">Authentic South Indian Cuisine</h2>
        <p>
          At Sundharaj Catering, we bring the heart of South India to your table. Our passion lies in crafting traditional, homemade dishes using the freshest ingredients and age-old family recipes, ensuring every bite is a celebration of authentic flavor and culture.
        </p>
      </div>
    </section>

    <section id="featured" className="section">
      <div className="container">
        <h2 className="section-title">Our Featured Dishes</h2>
        <div className="dishes-grid">
          <DishCard
            imgSrc="https://images.unsplash.com/photo-1631515243349-420a896d8776?q=80&w=2070&auto=format&fit=crop"
            title="Idli with Sambar & Chutney"
            description="Soft, fluffy steamed rice cakes served with flavorful lentil stew and fresh coconut chutney."
          />
          <DishCard
            imgSrc="https://images.unsplash.com/photo-1668665792224-386d3b3c345a?q=80&w=2070&auto=format&fit=crop"
            title="Masala Dosa"
            description="A thin, crispy rice and lentil crepe filled with a savory spiced potato mixture."
          />
          <DishCard
            imgSrc="https://images.unsplash.com/photo-1602351447937-745cb72061e2?q=80&w=2030&auto=format&fit=crop"
            title="Medu Vada"
            description="Crispy and savory fried lentil donuts, fluffy on the inside and perfect for dipping."
          />
          <DishCard
            imgSrc="https://images.unsplash.com/photo-1695299496974-ec898bf13a6d?q=80&w=2070&auto=format&fit=crop"
            title="Ven Pongal"
            description="A comforting and creamy dish made from rice and yellow lentils, seasoned with pepper and cumin."
          />
          <DishCard
            imgSrc="https://images.unsplash.com/photo-1604575017169-73e4b8a4f331?q=80&w=1964&auto=format&fit=crop"
            title="Vegetable Sambar"
            description="A delicious and spicy lentil soup packed with fresh, seasonal vegetables and aromatic spices."
          />
        </div>
      </div>
    </section>

    <section className="section cta-section">
        <div className="container">
            <h2>Book Your Catering Today!</h2>
            <p style={{marginBottom: '1.5rem', color: '#444'}}>Let us make your next event unforgettable with the taste of tradition.</p>
            <button onClick={() => navigateTo('contact')} className="btn">Get In Touch</button>
        </div>
    </section>
  </>
);

const DishCard = ({ imgSrc, title, description }: { imgSrc: string; title: string; description: string; }) => (
    <div className="dish-card">
        <img src={imgSrc} alt={title} />
        <div className="dish-card-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const MenuPage = () => (
    <div className="section">
        <div className="container">
            <h2 className="section-title">Our Catering Packages</h2>
            <p style={{maxWidth: '700px', margin: '-2rem auto 3rem auto'}}>
                We offer customizable packages for your events, bringing authentic South Indian flavors to your celebration. Here are our sample menus.
            </p>
            <div className="catering-packages-grid">
                <CateringPackage
                    title="Morning Catering"
                    items={[
                        'Idli', 'Sambar', 'Coconut Chutney', 'Tomato Chutney', 'Medu Vada', 'Ven Pongal', 'Upma', 'Filter Coffee / Tea'
                    ]}
                />
                <CateringPackage
                    title="Afternoon Catering"
                    items={[
                        'Sambar Rice', 'Rasam Rice', 'Curd Rice', 'Poriyal (Vegetable Stir-fry)', 'Kootu (Lentil & Veg Curry)', 'Chapati', 'Appalam (Papad)', 'Pickle', 'Payasam (Sweet Dish)'
                    ]}
                />
                <CateringPackage
                    title="Night Catering"
                    items={[
                        'South Indian Thali', 'Vegetable Pulao', 'Paneer Butter Masala', 'Mixed Vegetable Kurma', 'Idiyappam (String Hoppers)', 'Parotta', 'Sweet Dish of the Day', 'Raita'
                    ]}
                />
            </div>
        </div>
    </div>
);

const CateringPackage = ({ title, items }: { title: string; items: string[] }) => (
    <div className="leaf-menu">
        <h3>{title}</h3>
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
);


const ContactPage = () => (
    <div className="section">
        <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <p style={{maxWidth: '700px', margin: '-2rem auto 3rem auto'}}>Have an event coming up? Fill out the form below or contact us directly. We'd love to hear from you!</p>
            <div className="contact-grid">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventType">Event Type</label>
                        <input type="text" id="eventType" name="eventType" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date of Event</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="btn">Send Message</button>
                </form>
                <div className="contact-details">
                    <h3>Our Information</h3>
                    <p>
                        <strong>Phone:</strong><br />
                        <a href="tel:+911234567890">+91 12345 67890</a>
                    </p>
                    <p>
                        <strong>Email:</strong><br />
                        <a href="mailto:info@sundharajcatering.com">info@sundharajcatering.com</a>
                    </p>
                    <p>
                        <strong>Service Area:</strong><br />
                        Chennai, Tamil Nadu & Surrounding Areas
                    </p>
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const Footer = () => (
    <footer className="app-footer">
        <div className="container">
            <div className="footer-contact">
                <p>Sundharaj Catering | +91 12345 67890 | info@sundharajcatering.com</p>
            </div>
            <div className="footer-social">
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Sundharaj Catering. All Rights Reserved.</p>
        </div>
    </footer>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);