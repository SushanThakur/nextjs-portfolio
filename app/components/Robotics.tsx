import React from 'react';

const robots = [
  {
    id: 1,
    title: "Armikochan: 5-DOF Robotic Arm",
    desc: "Armikochan is a 5-DOF (Degrees of Freedom) robotic arm designed for wireless control and capable of storing and accurately repeating its previous movements.",
    href: "/Works/Robotics/W/Armikochan",
    img: "/robotics/armikochan/armikochan.jpg",
  }
]

function Robotics() {
  return (
    <>
      {robots.map((robo) => (
        <Card {...robo} key={robo.id} />
      ))}
    </>
  );
}

const Card = (props: { title: string, desc: string, href: string, img: string }) => {

  const { title, desc, href, img } = props;

  return (
    <div className="card bg-base-100 w-96 h-[520px] shadow-xl hoverEff animationAppear rounded-none">
      <figure>
        <img
          src={img}
          alt={title} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <form action={href}>
            <button className="btn btn-primary rounded-none">Learn More</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Robotics;