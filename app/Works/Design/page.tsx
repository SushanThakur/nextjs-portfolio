import React from 'react';
import Header from '@/app/components/Header';
import Design from '@/app/components/Design';
import Footer from '@/app/components/Footer';

function Page() {
  return (
    <>
      <Header />
      <div className="section-container py-10">
        <section className="section">
          <nav>
            <h1 className="font-semibold">Featured Designs</h1>
          </nav>
          <div className="featured-container">
            {/* Card Starts */}
            <Design />
            {/* Card Ends */}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Page;