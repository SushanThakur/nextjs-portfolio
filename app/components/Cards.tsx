import React from 'react';
import Link from 'next/link';

const blog = [
  {
    id: 1,
    title: "Getting Started With ROS 2: A Beginner's Guide",
    author: "Sushant Thakur",
    date: "Sep 24 2024",
    shortDesc: "Robotics is evolving rapidly, and with the rise of powerful open-source tools like ROS (Robot Operating System), it's easier than ever to develop...",
    link: "/Blog/GettingStartedWithRos2",
  },
  {
    id: 2,
    title: "Getting Started with Frontend Web Development: A Beginner’s Guide",
    author: "Sushant Thakur",
    date: "Dec 10 2024",
    shortDesc: "Frontend web development is an exciting field where creativity meets technology...",
    link: "/Blog/GettingStartedWithFrontendWebDevelopment",
  }

]

function Cards() {
  return (
    <>
      {blog.map(b => (
        <Card {...b} key={b.id} />
      ))}
    </>
  )
}

function Card(
  props: {
    title: string,
    author: string,
    date: string,
    shortDesc: string,
    link: string,
  }
) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl hoverEff animationAppear lg:h-[300px]">
        <div className="card-body">
          <h2 className="card-title">
            <Link href={props.link}>
              {props.title}
            </Link>
          </h2>
          <p className="text-sm text-slate-400">By {props.author}, {props.date} </p>
          <p> {props.shortDesc} </p>
          <div className="card-actions justify-end">

            <form action={props.link}>
              <button className="btn btn-primary">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;  