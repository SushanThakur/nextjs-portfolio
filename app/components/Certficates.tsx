import React from 'react';

const cert = [
  {
    id: 1,
    img: '/cyberSecurity.webp',
    title: 'Introduction to Cybersecurity by CISCO',
    date: '2020',
    cat: ['CyberSecurity'],
    desc: "I completed the 'Introduction to Cybersecurity' course through the Cisco Networking Academy program on September 22, 2020. This achievement was an essential step in expanding my knowledge of cybersecurity. The course provided me with foundational skills in cybersecurity concepts, which has strengthened my understanding of protecting information and networks in an increasingly digital world.",
  },
  {
    id: 2,
    img: '/python-bootcamp.webp',
    title: 'Python Bootcamp 2021',
    date: '2021',
    cat: ['Programming'],
    desc: "I completed this course while I was in 9th grade, which was a significant milestone for me. Since I was already familiar with C-Programming concepts, learning Python became much easier for me. This prior knowledge not only accelerated my learning but also allowed me to appreciate Python’s simplicity and flexibility in comparison to C. ",
  },
  {
    id: 3,
    img: 'cProgrammingWorkshop.webp',
    title: '7 Days Wrokshop on C-Programming',
    date: '2021',
    cat: ['Programming'],
    desc: "C was the first programming language I learned, starting in 7th grade, though I found it too complex initially and completed it in 8th grade. In 9th grade, I participated in this workshop meant for bachelor's students and secured 2nd place. The coordinators were so impressed that they refunded my enrollment fee and praised my skills. They encouraged my parents to support me in my programming journey.",
  },
  {
    id: 4,
    img: '/locusParticipant.webp',
    title: 'Winner of Plus Two Award In LOCUS 2024 Exhibition',
    date: '2024',
    cat: ['Programming', 'Robotics'],
    desc: "I created a 5DOF robotic arm, named 'Armikochan,' and showcased it at the LOCUS 2024 exhibition, where it received an overwhelmingly positive response. A local newspaper even featured an article about the project, and my high school shared it on their page. This experience helped me build valuable contacts and gain recognition. (more about this project in 'Works' tab) ",
  }
]

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
    <div>
      <div className="card bg-cyan-200 w-96 h-[640px] shadow-xl p-4 rounded-none hoverEff animationAppear">
        <figure>
          <img
            src={props.img}
            alt={props.title} />
        </figure>
        <div className="card-body px-0">
          <h2 className="card-title">
            {props.title}
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary bg-slate-900 border-slate-900 font-bold">{props.date}</div>

            {props.cat.map((ct, i) => (
              <div className="badge badge-outline" key={i}>{ct}</div>
            ))}

          </div>
          <p>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certificates;