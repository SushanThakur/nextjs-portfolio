import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Getting Started With ROS 2 Humble</title>
        <meta name="description" content="A beginner's guide to getting started with ROS 2 Humble, including installation and setup instructions." />
      </Head>

      <Header />

      <main className="section-container py-10">
        <section className="section px-4 sm:px-6 lg:px-8">
          <nav>
            <h1 className="text-2xl sm:text-4xl font-bold">Getting Started With ROS 2: A Beginner's Guide</h1>
          </nav>
          <div className="leftAlign mt-6">
            <p className="mb-4">
              Robotics is evolving rapidly, and with the rise of powerful open-source tools like ROS (Robot Operating System), it's easier than ever to develop and control robots. ROS 2 is the next-generation version of ROS, designed to handle the complexities of modern robotic systems with a focus on distributed systems, real-time applications, and security. In this guide, you'll get an introduction to ROS 2 and learn how to get started.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">What is ROS 2?</h2>
            <p className="mb-4">
              ROS 2 is a set of software libraries and tools that help developers build robot applications. It provides hardware abstraction, device drivers, libraries, visualizers, message-passing, package management, and more. Compared to ROS 1, ROS 2 comes with improved communication middleware, real-time capabilities, and better support for multi-robot systems. It is built on the Data Distribution Service (DDS) standard, allowing more flexible and scalable communication across distributed networks.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Why Choose ROS 2?</h2>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                <strong>Real-time systems:</strong> ROS 2 supports real-time control, essential for robotic systems that need precise timing.
              </li>
              <li className="mb-2">
                <strong>Improved communication:</strong> With the DDS standard, ROS 2 can handle complex communication scenarios across multiple robots and environments.
              </li>
              <li className="mb-2">
                <strong>Security:</strong> ROS 2 has built-in mechanisms for secure communication, making it suitable for commercial and sensitive applications.
              </li>
              <li>
                <strong>Cross-platform compatibility:</strong> ROS 2 is supported on Linux, Windows, and macOS, allowing more flexibility in development environments.
              </li>
            </ol>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Setting Up ROS 2 (Humble)</h2>
            <p className="mb-4">Follow these steps to get started with ROS 2 Humble on your system.</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-blue-800">Step 1: Choose Your Operating System</h3>
            <p className="mb-4">
              While ROS 2 supports multiple platforms, Ubuntu is the most commonly used OS due to its strong support for open-source tools. This guide will focus on installing ROS 2 Humble on Ubuntu, but you can also find installation guides for Windows and macOS on the official ROS 2 website.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-blue-800">Step 2: Install ROS 2</h3>
            <p className="mb-4">The latest stable release of ROS 2 is Humble Hawksbill. To install it on Ubuntu, follow these steps:</p>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-4">
                <strong>Add ROS 2 repository:</strong>
                <div className="mockup-code overflow-x-auto ">
                  <pre data-prefix="$"><code>sudo apt update</code></pre>
                  <pre data-prefix="$"><code>sudo apt install software-properties-common</code></pre>
                  <pre data-prefix="$"><code>sudo add-apt-repository universe</code></pre>
                  <pre data-prefix="$"><code>sudo apt update</code></pre>
                </div>
              </li>
              <li className="mb-4">
                <strong>Add ROS 2 GPG Key:</strong>
                <div className="mockup-code overflow-x-auto ">
                  <pre data-prefix="$"><code>sudo apt install curl</code></pre>
                  <pre data-prefix="$"><code>sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key | sudo apt-key add -</code></pre>
                </div>
              </li>
              <li className="mb-4">
                <strong>Install ROS 2 Humble:</strong>
                <div className="mockup-code overflow-x-auto ">
                  <pre data-prefix="$"><code>sudo apt update</code></pre>
                  <pre data-prefix="$"><code>sudo apt install ros-humble-desktop</code></pre>
                </div>
                <p>For a minimal install, replace <code>ros-humble-desktop</code> with <code>ros-humble-ros-base</code>.</p>
              </li>
              <li className="mb-4">
                <strong>Set up ROS 2 environment:</strong>
                <div className="mockup-code overflow-x-auto ">
                  <pre data-prefix="$"><code>source /opt/ros/humble/setup.bash</code></pre>
                </div>
                <p>Or source it manually each time you open a new terminal:</p>
                <div className="mockup-code overflow-x-auto ">
                  <pre data-prefix="$"><code>source /opt/ros/humble/setup.bash</code></pre>
                </div>
              </li>
            </ol>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-blue-800">Step 3: Test Your Installation</h3>
            <p className="mb-4">To verify that ROS 2 is installed correctly, open a terminal and run:</p>
            <div className="mockup-code overflow-x-auto ">
              <pre data-prefix="$"><code>ros2 run demo_nodes_cpp talker</code></pre>
            </div>
            <p className="mb-4">In a new terminal, run:</p>
            <div className="mockup-code overflow-x-auto ">
              <pre data-prefix="$"><code>ros2 run demo_nodes_cpp listener</code></pre>
            </div>
            <p className="mb-4">
              The talker node will publish messages, and the listener node will subscribe and print them, demonstrating the message-passing system of ROS 2.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-5 mb-3 text-blue-700">Conclusion</h2>
            <p className="mb-4">
              Getting started with ROS 2 might seem challenging at first, but it opens up a world of possibilities for building robust, scalable, and flexible robotic systems. Happy coding!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
