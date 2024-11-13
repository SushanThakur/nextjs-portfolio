import React from 'react';

const frontWorks = [
  {
    id: 1,
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0vhNMjYq-n0L7IQtibirIJeKga3qGrRe0HkH2Y_Xj-pf6_7TyEUcHua7vsWwetaOk4BYyD3ZhiYOF7VOlIePbCxmsT4icK6Gci_Uh-43ojrivPCoZWXCHLVCAEC-asMKs3ebiIOMmw5w/s1600/Coming+Soon2.jpg',
    title: 'Featured Work',
    desc: 'Will be added soon.',
    refTo: '/',
  },
]

function Frontend() {
  return (
    <div>
      {frontWorks.map((fe, index) => (
        <Front {...fe} key={index} />
      ))}
    </div>
  );
}

const Front = (props: { id: number, img: string, title: string, desc: string, refTo: string }) => {
  return (
    <div className="card glass w-96 animationAppear hoverEff">
      <figure>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0vhNMjYq-n0L7IQtibirIJeKga3qGrRe0HkH2Y_Xj-pf6_7TyEUcHua7vsWwetaOk4BYyD3ZhiYOF7VOlIePbCxmsT4icK6Gci_Uh-43ojrivPCoZWXCHLVCAEC-asMKs3ebiIOMmw5w/s1600/Coming+Soon2.jpg"
          alt="car!"
          className='h-[200px] aspect-auto'
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-end">
          <form action={props.refTo}>
            <button className="btn btn-primary">Learn now!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Frontend;