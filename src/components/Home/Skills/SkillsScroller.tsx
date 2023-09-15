import { useState } from "react";

const data = {
  frontendSkills: [
    {
      id: 1,
      title: "HTML5",
      logo: "/assets/logos/Frontend/html_pixel.png",
    },
    {
      id: 2,
      title: "CSS3",
      logo: "/assets/logos/Frontend/css_pixel.png",
    },
    {
      id: 3,
      title: "JavaScript",
      logo: "/assets/logos/Frontend/javascript_pixel.png",
    },
    {
      id: 1,
      title: "HTML5",
      logo: "/assets/logos/Frontend/html_pixel.png",
    },

    {
      id: 3,
      title: "JavaScript",
      logo: "/assets/logos/Frontend/javascript_pixel.png",
    },
  ],
  backendSkills: [
    {
      id: 4,
      title: "Java",
      logo: "/images/nodejs.png",
    },
    {
      id: 5,
      title: "C#",
      logo: "/images/express.png",
    },
    {
      id: 6,
      title: "Python",
      logo: "/images/python.png",
    },
    {
      id: 7,
      title: "Django",
      logo: "/images/django.png",
    },
    {
      id: 8,
      title: "Ruby on Rails",
      logo: "/images/rails.png",
    },
  ],
  databaseSkills: [
    {
      title: "MySQL",
      logo: "/images/mysql.png",
    },
    {
      title: "MongoDB",
      logo: "/images/mongodb.png",
    },
    {
      title: "PostgreSQL",
      logo: "/images/postgresql.png",
    },
    {
      title: "Oracle",
      logo: "/images/oracle.png",
    },
  ],
};

export default function SkillsScroller() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    console.log("next");
    const nextIndex = startIndex + itemsPerPage;
    setStartIndex(nextIndex >= data.frontendSkills.length ? 0 : nextIndex);
  };

  const handlePrevious = () => {
    console.log("previous");

    const previousIndex = startIndex - itemsPerPage;
    setStartIndex(
      previousIndex < 0
        ? data.frontendSkills.length - itemsPerPage
        : previousIndex
    );
  };
  return (
    <div className="slider-container flex flex-row items-center justify-center gap-10">
      <svg
        onClick={handlePrevious}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-9 h-9 text-blue-400 rounded-full hover:bg-gray-400 hover:bg-opacity-10 transition  cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <div className="relative w-[360px]">
        <div className="slide flex flex-row overflow-x-auto space-x-4 p-4">
          {data.frontendSkills
            .slice(startIndex, startIndex + itemsPerPage)
            .map((logo) => (
              <div key={logo.id} className="flex-shrink-0">
                <img
                  src={logo.logo}
                  alt={logo.title}
                  className="w-24 h-24 object-contain hover:scale-110 transition"
                />
                <p className="text-center">{logo.title}</p>
              </div>
            ))}
        </div>
      </div>
      <svg
        onClick={handleNext}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-9 h-9 text-indigo-400 rounded-full hover:bg-gray-400 hover:bg-opacity-10 transition  cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}
