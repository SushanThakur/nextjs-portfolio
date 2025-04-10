import React from 'react';

const des = [
  {
    id: 1,
    url: '/kairobyte.png',
    title: 'Brand Logo',
    desc: 'Designed this logo for a private company.',
  },
  {
    id: 2,
    url: '/NPL.png',
    title: 'Facebook Page Logo',
    desc: 'Designed this logo for a small facebook page.',
  },
  {
    id: 3,
    url: '/NTBNSevent.png',
    title: 'Event Banner Design',
    desc: 'Designed this banner for a cricket event happening at Pulchowk Campus.',
  },
]

function Design() {
  return (
    <>
      {des.map(d => (
        <Des {...d} key={d.id} />
      ))}
    </>
  );
}

function Des(props: {
  id: number,
  url: string,
  title: string,
  desc: string,
}) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl hoverEff animationAppear">
      {/* <figure className="px-10 pt-10">
        <img
          src={props.url}
          alt={props.title}
          className="rounded-xl h-[200px] aspect-auto" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        <div className="card-actions">
        </div>
        <form action="/Contact">
          <button className="btn btn-primary mt-4">Want Something Similar? </button>
        </form>
      </div> */}
    </div>
  );
}

export default Design;