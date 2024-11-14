import Footer from '@/app/components/Footer';
import Frontend from '@/app/components/Frontend';
import Header from '@/app/components/Header';
import React from 'react';

function Page() {
  return (
    <div>

      <Header />

      <div className="section-container py-10">
        <section className="section">

          <nav>
            <h1 className="font-semibold">My works as Frontend Developer</h1>
          </nav>

          <Frontend />

        </section>
      </div>

      <Footer />

    </div>
  );
}

export default Page;