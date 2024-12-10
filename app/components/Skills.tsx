import React from 'react';

const skills = {
  high: [
    {
      id: 1,
      href: "https://www.w3.org/html/",
      title: "HTML5 - The standard markup language for creating web pages.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt: "html5",
      cat: "Web",
    },
    {
      id: 2,
      href: "https://www.w3schools.com/css/",
      title: "CSS3 - Style sheet language for designing web pages.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      alt: "css3",
      cat: "Web",
    },
    {
      id: 3,
      href: "https://www.cprogramming.com/",
      title: "C - A foundational programming language widely used in robotics.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      alt: "c",
      cat: "Robotics",
    },
    {
      id: 4,
      href: "https://www.w3schools.com/cpp/",
      title: "C++ - A powerful object-oriented language, popular in robotics.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      alt: "cplusplus",
      cat: "Robotics",
    },
    {
      id: 5,
      href: "https://www.arduino.cc/",
      title: "Arduino - Open-source electronics platform for robotics.",
      src: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
      alt: "arduino",
      cat: "Robotics",
    },
    {
      id: 6,
      href: "https://ubuntu.com/",
      title: "Ubuntu - A popular Linux distribution used in robotics.",
      src: "https://w7.pngwing.com/pngs/503/133/png-transparent-ubuntu-plain-logo-icon.png",
      alt: "ubuntu",
      cat: "Robotics",
    },
    {
      id: 7,
      href: "https://www.solidworks.com/",
      title: "SolidWorks - 3D CAD software for modeling engineering components.",
      src: "https://banner2.cleanpng.com/20180425/kqw/ave9q5ayl.webp",
      alt: "solidworks",
      cat: "3D-Modelling",
    },
    {
      id: 8,
      href: "https://git-scm.com/",
      title: "Git - Version control system for managing code changes.",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      alt: "git",
      cat: "Others",
    },
    {
      id: 9,
      href: "https://www.figma.com/",
      title: "Figma - A collaborative interface design tool.",
      src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      alt: "figma",
      cat: "Others",
    },
    {
      id: 10,
      href: "https://www.photoshop.com/en",
      title: "Photoshop - A powerful tool for digital image editing.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
      alt: "photoshop",
      cat: "Others",
    },
    {
      id: 11,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      title: "JavaScript - Programming language for dynamic web content.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "javascript",
      cat: "Web",
    },
    {
      id: 12,
      href: "https://reactjs.org/",
      title: "React - JavaScript library for building user interfaces.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt: "react",
      cat: "Web",
    },
  ],
  mid: [

    {
      id: 2,
      href: "https://firebase.google.com/",
      title: "Firebase - Platform for building and deploying web apps.",
      src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      alt: "firebase",
      cat: "Web",
    },
    {
      id: 3,
      href: "https://tailwindcss.com/",
      title: "Tailwind - Utility-first CSS framework for web design.",
      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      alt: "tailwind",
      cat: "Web",
    },
    {
      id: 4,
      href: "https://sass-lang.com",
      title: "Sass - CSS extension language for styling web pages.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      alt: "sass",
      cat: "Web",
    },
    {
      id: 5,
      href: "https://www.python.org",
      title: "Python - A versatile programming language for various applications.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      alt: "python",
      cat: "Robotics",
    },
    {
      id: 6,
      href: "https://opencv.org/",
      title: "OpenCV - Library for computer vision and robotics applications.",
      src: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
      alt: "opencv",
      cat: "Robotics",
    },
    {
      id: 7,
      href: "https://docs.ros.org/en/foxy/index.html",
      title: "ROS2 - Framework for robotics software development.",
      src: "https://roboticsbackend.com/wp-content/uploads/2022/04/ros_logo.png",
      alt: "ros2",
      cat: "Robotics",
    },
    {
      id: 8,
      href: "https://www.blender.org/",
      title: "Blender - Open-source 3D modeling and animation software.",
      src: "https://download.blender.org/branding/community/blender_community_badge_white.svg",
      alt: "blender",
      cat: "3D-Modelling",
    },
    {
      id: 9,
      href: "https://www.linux.org/",
      title: "Linux - Open-source operating system, widely used in development.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      alt: "linux",
      cat: "Others",
    },
    {
      id: 10,
      href: "https://www.adobe.com/in/products/illustrator.html",
      title: "Illustrator - Adobe software for vector graphic design.",
      src: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
      alt: "illustrator",
      cat: "Others",
    },

  ],
  low: [
    {
      id: 1,
      href: "https://nextjs.org/",
      title: "Next.js - React framework for building optimized web apps.",
      src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      alt: "nextjs",
      cat: "Web",
    },
    {
      id: 3,
      href: "https://nodejs.org",
      title: "Node.js - JavaScript runtime for server-side applications.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "nodejs",
      cat: "Web",
    },
    {
      id: 2,
      href: "https://www.java.com",
      title: "Java - A versatile, object-oriented programming language for building platform-independent applications.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      alt: "java",
      cat: "Web",
    },
    {
      id: 4,
      href: "https://www.mathworks.com/",
      title: "MATLAB - High-level language for numerical computing.",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
      alt: "matlab",
      cat: "Robotics",
    },
    {
      id: 5,
      href: "https://unrealengine.com/",
      title: "Unreal Engine - 3D game engine for interactive applications.",
      src: "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg",
      alt: "unreal",
      cat: "3D-Modelling",
    },
    {
      id: 6,
      href: "https://cloud.google.com",
      title: "Google Cloud Platform - Cloud services by Google.",
      src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      alt: "gcp",
      cat: "Others",
    },
    {
      id: 7,
      href: "https://www.nginx.com",
      title: "Nginx - Web server software for scalable applications.",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
      alt: "nginx",
      cat: "Others",
    },
  ],
};


function Skills() {
  return (
    <div className='ml-2 w-full max-w-[88vw]'>
      <div className="overflow-x-auto skill-table-container w-full">

        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Web</th>
              <th>Robotics</th>
              <th>3D-Modelling</th>
              <th>Others</th>
            </tr>
          </thead>
          <Skill />
        </table>

      </div>
    </div>
  );
}

const Skill = () => {
  return (
    <tbody>

      <tr>
        <th>High</th>
        {/* HIGH WEB */}
        <SkillCategory level={'high'} cat={'Web'} />
        <SkillCategory level={'high'} cat={'Robotics'} />
        <SkillCategory level={'high'} cat={'3D-Modelling'} />
        <SkillCategory level={'high'} cat={'Others'} />
      </tr>

      <tr>
        <th>Mid</th>
        <SkillCategory level={'mid'} cat={'Web'} />
        <SkillCategory level={'mid'} cat={'Robotics'} />
        <SkillCategory level={'mid'} cat={'3D-Modelling'} />
        <SkillCategory level={'mid'} cat={'Others'} />
      </tr>

      <tr>
        <th>Low</th>
        <SkillCategory level={'low'} cat={'Web'} />
        <SkillCategory level={'low'} cat={'Robotics'} />
        <SkillCategory level={'low'} cat={'3D-Modelling'} />
        <SkillCategory level={'low'} cat={'Others'} />
      </tr>

    </tbody>
  )
}

const SkillCategory = (props: { level: string, cat: string }) => {

  const test = props.cat;

  let content;

  if (props.level === 'high') {
    content = (
      <td>
        {skills.high.filter(s => s.cat === test).map((s, i) => (
          <a href={s.href} target="_blank" rel="noreferrer" title={s.title} key={i}>
            <img
              src={s.src}
              alt={s.alt}
            />
          </a>
        ))}
      </td>
    )
  } else if (props.level === 'mid') {
    content = (
      <td>
        {skills.mid.filter(s => s.cat === test).map((s, i) => (
          <a href={s.href} target="_blank" rel="noreferrer" title={s.title} key={i}>
            <img
              src={s.src}
              alt={s.alt}
            />
          </a>
        ))}
      </td>
    )
  } else if (props.level === 'low') {
    content = (
      <td>
        {skills.low.filter(s => s.cat === test).map((s, i) => (
          <a href={s.href} target="_blank" rel="noreferrer" title={s.title} key={i}>
            <img
              src={s.src}
              alt={s.alt}
            />
          </a>
        ))}
      </td>
    )
  }


  return (
    <>
      {content}
    </>
  );
};

export default Skills;