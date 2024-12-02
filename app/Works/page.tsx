import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Design from '../components/Design';
import Frontend from '../components/Web';
import Robotics from '../components/Robotics';

function Page() {
  return (
    <div>

      <Header />

      <div className="section-container py-10">
        <section className="section">
          <nav className='font-bold'>Design</nav>
          <div className="featured-container">
            <Design />
          </div>
          <nav>Frontend</nav>
          <div className="featured-container">
            <Frontend />
          </div>
          <nav>Robotics</nav>
          <div className="featured-container">
            <Robotics />
          </div>
        </section>
      </div>

      <Footer />

    </div>
  );
}

export default Page;