import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Full Stack Inventory Management Web App</title>
        <meta
          name="description"
          content="Explore a feature-rich inventory management system built using the MERN stack, including product creation, editing, and deletion with responsive design."
        />
      </Head>

      <Header />

      <main className="section-container py-10">
        <section className="section px-4 sm:px-6 lg:px-8">
          <nav>
            <h1 className="text-2xl sm:text-4xl font-bold">Full Stack Inventory Management Web App</h1>
          </nav>
          <div className="leftAlign mt-6">
            <p className="mb-4">
              This Full Stack Inventory Management App provides a robust platform to manage products effectively. Built with the MERN stack, it allows users to create, edit, and delete products while offering a responsive and user-friendly interface.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Features</h2>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">
                <strong>Home Page:</strong> View all available products with options to edit and delete.
              </li>
              <li className="mb-2">
                <strong>Edit Products:</strong> Update product details easily through the edit interface.
              </li>
              <li>
                <strong>Create Products:</strong> Add new products to your inventory using the intuitive creation page.
              </li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Screenshots</h2>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">1. Home Page</h3>
              <img
                src="https://github.com/SushanThakur/mern-full/raw/main/images/home-page.png"
                alt="Home Page"
                className="rounded-lg shadow-md w-full sm:w-3/4 mx-auto"
              />
              <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">2. Edit Option</h3>
              <img
                src="https://github.com/SushanThakur/mern-full/raw/main/images/home-page-edit.png"
                alt="Edit Option"
                className="rounded-lg shadow-md w-full sm:w-3/4 mx-auto"
              />
              <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">3. Create a Product</h3>
              <img
                src="https://github.com/SushanThakur/mern-full/raw/main/images/create-product-page.png"
                alt="Create Product Page"
                className="rounded-lg shadow-md w-full sm:w-3/4 mx-auto"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Technology Stack</h2>
            <p className="mb-4">
              The app is built using the MERN stack:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>MongoDB:</strong> For database management and storage.</li>
              <li><strong>Express.js:</strong> To handle backend logic and API integration.</li>
              <li><strong>React.js:</strong> For building a responsive and dynamic user interface.</li>
              <li><strong>Node.js:</strong> To power the server-side operations efficiently.</li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Source Code</h2>
            <p className="mb-4">
              The complete source code for this project is available on GitHub. Check it out here: &nbsp;
              <a
                href="https://github.com/SushanThakur/mern-full"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://github.com/SushanThakur/mern-full
              </a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
