import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Robotics from '@/app/components/Robotics';
import React from 'react';

function Page() {
  return (
    <div>
      <Header />

      <div className="section-container py-10">
        <section className="section">
          <nav>
            <h1 className='font-semibold'>Robotics Projects</h1>
          </nav>

          <div className='featured-container'>
            <Robotics />
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Page;