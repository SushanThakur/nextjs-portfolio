import React from 'react';

const webWorks = [
  {
    id: 1,
    img: 'https://github.com/SushanThakur/mern-full/raw/main/images/home-page.png',
    title: 'Full Stack Inventory Management Web App',
    desc: 'A comprehensive web application designed to manage inventory, track stock levels, and streamline operations. Built with the MERN stack for robust and dynamic performance.',
    refTo: '/Works/Web/W/InventoryManagementWebApp',
  },
  {
    id: 2,
    img: '/works-web-portfolio.png',
    title: 'Portfolio Website Built with Next.js',
    desc: 'A sleek and modern portfolio website developed using Next.js, featuring fast navigation, SEO optimization, and responsive design to showcase projects and skills effectively.',
    refTo: '/',
  },
]

function Frontend() {
  return (
    <>
      {webWorks.map((work, index) => (
        <Front {...work} key={index} />
      ))}
    </>
  );
}

const Front = (props: { id: number, img: string, title: string, desc: string, refTo: string }) => {

  const { id, img, title, desc, refTo } = props;

  return (
    <div className="card bg-base-100 w-96 h-[480px] shadow-xl hoverEff animationAppear">
      <figure>
        <img
          src={img}
          alt={title}
          className='h-[200px] aspect-auto'
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <form action={refTo}>
            <button className="btn btn-primary">Learn More</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Frontend;