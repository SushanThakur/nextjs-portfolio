import Footer from '@/app/components/Footer';
import Frontend from '@/app/components/Web';
import Header from '@/app/components/Header';
import React from 'react';

function Page() {
  return (
    <div>

      <Header />

      <div className="section-container py-10">
        <section className="section">

          <nav>
            <h1 className="font-semibold">My works as Web Developer</h1>
          </nav>

          <div className='featured-container'>
            <Frontend />
          </div>


        </section>
      </div>

      <Footer />

    </div>
  );
}

export default Page;