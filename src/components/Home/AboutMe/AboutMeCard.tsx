import pixel_quinten from "/assets/quinten_pixel.png";
import { useState } from "react";

const AboutMe = [
  {
    id: 1,
    title: "About me",
    text: "Hi! My name is Quinten van de vreken. Currently I am a 20 year old Computer Science student at Karel de grote In antwerp. ",
  },
  {
    id: 2,
    title: "Education",
    text: "I have been studying computer science for 2 years now, which makes me a last year student. In those two years I have gained a strong base of knowledge in the field of computer science. I have also learned to work with different programming languages and frameworks. ",
  },
  {
    id: 3,
    title: "Passion",
    text: "I have a passion for programming and web development. I am always looking for new challenges and projects to work on. I am a very motivated person and I always try to give my best. I am a very social person and I like to work in a team. I am also a very creative person and I like to solve problems.",
  },
];

export default function AboutMeCard() {
  const [aboutMe, setAboutMe] = useState(AboutMe[0]);

  const nextAboutMe = () => {
    if (aboutMe.id === AboutMe.length) {
      setAboutMe(AboutMe[0]);
    } else {
      setAboutMe(AboutMe[aboutMe.id]);
    }
  };

  return (
    <div className="py-10">
      <div className="flex flex-row w-[800px] h-[170px] bg-gray-200 bg-opacity-10 border-sky-100 border-2 ">
        <div className="w-1/4 relative bottom-0 ">
          <img
            src={pixel_quinten}
            alt="its a me"
            className="absolute left-0 bottom-0"
          />
        </div>
        <div className="flex flex-col w-3/4 py-2  items-start px-5">
          <p className="text-white">{aboutMe.title}</p>
          <p className="text h-full">{aboutMe.text}</p>
          <button
            onClick={nextAboutMe}
            className="border self-end shadow-black px-4 py-1 border-1 border-black bg-light-pink rounded-xl shadow-2xl text-white font-semibold font-pixel w-fit"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
