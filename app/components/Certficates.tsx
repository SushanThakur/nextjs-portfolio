import React from 'react';

const cert = [
  {
    id: 1,
    img: '/cyberSecurity.webp',
    title: 'Introduction to Cybersecurity by CISCO',
    date: '2020',
    cat: ['CyberSecurity'],
    desc: "I completed the 'Introduction to Cybersecurity' course through the Cisco Networking Academy program on September 22, 2020. This achievement was an essential step in expanding my knowledge of cybersecurity. The course provided me with foundational skills in cybersecurity concepts, strengthening my understanding of how to protect information and networks in an increasingly digital world.",
  },
  {
    id: 2,
    img: '/python-bootcamp.webp',
    title: 'Python Bootcamp 2021',
    date: '2021',
    cat: ['Programming'],
    desc: "I completed this course while I was in 9th grade, which was a significant milestone for me. Since I was already familiar with C programming concepts, learning Python became much easier. This prior knowledge not only accelerated my learning but also allowed me to appreciate Python’s simplicity and flexibility compared to C.",
  },
  {
    id: 3,
    img: '/cProgrammingWorkshop.webp',
    title: '7-Day Workshop on C Programming',
    date: '2021',
    cat: ['Programming', 'Workshop'],
    desc: "C was the first programming language I learned, starting in 7th grade, though I initially found it complex and completed it in 8th grade. In 9th grade, I participated in this workshop, which was intended for bachelor's students, and secured 2nd place. The coordinators were so impressed that they refunded my enrollment fee and praised my skills, encouraging my parents to support me in my programming journey.",
  },
  {
    id: 4,
    img: '/locusParticipant.webp',
    title: 'Winner of Plus Two Award in LOCUS 2024 Exhibition',
    date: '2024',
    cat: ['Robotics', 'Designing', 'Electronics'],
    desc: "I created a 5DOF robotic arm named \"Armikochan\" and showcased it at the LOCUS 2024 exhibition, where it received an overwhelmingly positive response. This experience helped me build valuable contacts and gain recognition. (Further details about this project are available in the \"Works\" tab.)",
  },
  {
    id: 5,
    img: '/mechTrixWinner.webp',
    title: 'Winner of Plus Two Award in MechTRIX 2080 Event',
    date: '2024',
    cat: ['Robotics', 'Designing', 'Electronics'],
    desc: "I developed a 5DOF robotic arm named \"Armikochan,\" which I presented at the high school-level project demonstration of MechTRIX 2080, organized by SOMAES, IOE Pulchowk Campus, where I won first place. This project received positive feedback from attendees. (Further details about this project are available in the \"Works\" tab.)",
  },
  {
    id: 6,
    img: '/reactjs.jpg',
    title: 'React JS - Complete Guide for Frontend Web Development',
    date: '2024',
    cat: ['Web Dev', 'Frontend', 'ReactJS'],
    desc: "I completed the 'React JS - Complete Guide for Frontend Web Development' course on November 10, 2024, through Udemy. This course deepened my knowledge of React JS and strengthened my frontend web development skills, equipping me to create dynamic, responsive web applications.",
  }

];


function Certificates() {
  return (
    <>
      {cert.map(c => (
        <Certficate {...c} key={c.id} />
      ))}
    </>
  )
}

function Certficate(
  props: {
    id: number,
    img: string,
    title: string,
    date: string,
    cat: string[],
    desc: string,
  }
) {
  return (

    <div className="card bg-cyan-200 w-96 shadow-xl rounded-none h-[640px] hoverEff animationAppear w-82 p-2">
      <figure className='min-h-[200px]'>
        <img
          src={props.img}
          alt={props.title}
          className='h-full'
        />
      </figure>
      <div className="card-body p-2 ">
        <h2 className="card-title p-0">
          {props.title}
        </h2>
        <div className="card-actions justify-end">
          {props.cat.map((c, index) => (
            <div className="badge badge-outline" key={index}>{c}</div>
          ))}
          <div className="badge badge-secondary bg-slate-900 border-slate-900 font-bold">{props.date}</div>
        </div>
        <p>{props.desc}</p>
      </div>
    </div>

  );
}

export default Certificates;