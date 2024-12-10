import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Getting Started with Frontend Web Development</title>
        <meta name="description" content="An introductory guide to frontend web development, covering essential tools, technologies, and steps for beginners." />
      </Head>

      <Header />

      <main className="section-container py-10">
        <section className="section px-4 sm:px-6 lg:px-8">
          <nav>
            <h1 className="text-2xl sm:text-4xl font-bold">Getting Started with Frontend Web Development</h1>
          </nav>
          <div className="leftAlign mt-6">
            <p className="mb-4">
              Frontend web development is an exciting field where creativity meets technology. It focuses on creating visually appealing and interactive websites that users interact with directly. If you’re just starting, this guide will introduce you to the basics of frontend development and help you get started.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">What is Frontend Web Development?</h2>
            <p className="mb-4">
              Frontend development involves building the part of a website that users see and interact with. It includes designing layouts, implementing responsive designs, and creating seamless user experiences. Core technologies include HTML, CSS, and JavaScript, supported by various frameworks and libraries.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Why Choose Frontend Development?</h2>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                <strong>Creative Freedom:</strong> You get to design and build visually engaging interfaces.
              </li>
              <li className="mb-2">
                <strong>High Demand:</strong> Companies need skilled frontend developers to build user-friendly websites.
              </li>
              <li className="mb-2">
                <strong>Constant Innovation:</strong> New tools and technologies keep the field dynamic and exciting.
              </li>
              <li>
                <strong>Accessibility:</strong> Resources and learning materials are widely available online.
              </li>
            </ol>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Getting Started with Frontend Development</h2>
            <p className="mb-4">Follow these steps to begin your journey as a frontend developer:</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-blue-800">Step 1: Learn the Basics</h3>
            <p className="mb-4">
              Start with the foundational technologies: HTML for structure, CSS for styling, and JavaScript for interactivity. Many free online resources like MDN Web Docs, freeCodeCamp, and Codecademy are excellent for beginners.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-blue-800">Step 2: Familiarize Yourself with Tools</h3>
            <p className="mb-4">
              Get comfortable using developer tools like browsers (Chrome DevTools), text editors (VS Code), and version control systems (Git). These are essential for efficient development.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-blue-800">Step 3: Explore Frameworks and Libraries</h3>
            <p className="mb-4">
              Once you master the basics, move on to frameworks like React, Vue.js, or Angular to simplify and enhance your development workflow. Libraries like Bootstrap or Tailwind CSS can help with responsive design.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-blue-800">Step 4: Build Projects</h3>
            <p className="mb-4">
              Apply your knowledge by building projects like a portfolio website, a to-do list app, or a blog. Practical experience is key to learning and showcasing your skills to potential employers or clients.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Conclusion</h2>
            <p className="mb-4">
              Frontend web development is a rewarding and dynamic field that combines technical expertise with creativity. By starting with the basics and gradually building your skills, you can create engaging and user-friendly websites. Happy coding!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
