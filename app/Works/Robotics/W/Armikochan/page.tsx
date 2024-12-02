import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Armikochan - 5-DOF Robotic Arm</title>
        <meta
          name="description"
          content="Explore Armikochan, a 5-DOF robotic arm capable of wireless control and precise motion repetition, complete with source code and 3D models."
        />
      </Head>

      <Header />

      <main className="section-container py-10">
        <section className="section px-4 sm:px-6 lg:px-8">
          <nav>
            <h1 className="text-2xl sm:text-4xl font-bold">Armikochan - 5-DOF Robotic Arm</h1>
          </nav>
          <div className="leftAlign mt-6">
            <p className="mb-4">
              <strong>Armikochan</strong> is a 5-DOF (Degrees of Freedom) robotic arm designed for wireless control and capable of storing and accurately repeating its previous movements. It is a testament to the potential of combining mechanics, electronics, and software to create something both functional and fascinating.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Key Features</h2>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">
                <strong>Wireless Control:</strong> Operate the robotic arm remotely with ease.
              </li>
              <li className="mb-2">
                <strong>Memory Function:</strong> Save and repeat previous movements with precision.
              </li>
              <li>
                <strong>Custom Design:</strong> Every aspect, from the mechanical design to the electronics, was created by hand.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Some Images & Videos</h2>

            <div className='flex gap-8 overflow-auto max-w-[90vw] h-96'>
              <Vid src="/robotics/armikochan/vid1.mp4" />
              <Vid src="/robotics/armikochan/vid2.mp4" />
              <Vid src="/robotics/armikochan/vid3.mp4" />
              <Vid src="/robotics/armikochan/vid4.mp4" />
              <Vid src="/robotics/armikochan/vid5.mp4" />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Award Winning Moments</h2>

            <div className='flex gap-8 overflow-auto max-w-[90vw] h-80'>
              <Vid src="/robotics/armikochan/award-locus.mp4" />
              <Vid src="/robotics/armikochan/award-mech.mp4" />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Source Code</h2>
            <p className="mb-4">
              Explore the source code and 3D models for Armikochan on GitHub: &nbsp;
              <a
                href="https://github.com/SushanThakur/armikochan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://github.com/SushanThakur/armikochan
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

const Vid = (props: { src: string }) => {

  const { src } = props;

  return (
    <video className='h-full' autoPlay muted controls loop>
      <source src={src} type='video/mp4' />
      Your browser does not support video tag.
    </video>
  )
}

export default Page;
