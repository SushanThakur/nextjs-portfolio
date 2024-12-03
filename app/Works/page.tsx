import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Design from '../components/Design';
import Robotics from '../components/Robotics';
import Web from '../components/Web';

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
          <nav className='font-bold'>Web Development</nav>
          <div className="featured-container">
            <Web />
          </div>
          <nav className='font-bold'>Robotics</nav>
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