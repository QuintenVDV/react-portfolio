const data = {
  frontendSkills: [
    {
      title: "HTML5",
      logo: "/assets/logos/Frontend/html_pixel.png",
    },
    {
      title: "CSS3",
      logo: "/assets/logos/Frontend/css_pixel.png",
    },
    {
      title: "JavaScript",
      logo: "/assets/logos/Frontend/javascript_pixel.png",
    },
  ],
  backendSkills: [
    {
      title: "Java",
      logo: "/images/nodejs.png",
    },
    {
      title: "C#",
      logo: "/images/express.png",
    },
    {
      title: "Python",
      logo: "/images/python.png",
    },
    {
      title: "Django",
      logo: "/images/django.png",
    },
    {
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
  return (
    <div className="flex flex-row items-center justify-center gap-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-9 h-9 text-blue-400 rounded-full hover:bg-slate-900 hover:bg-opacity-10 transition  cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>

      <div className="grid grid-cols-3 gap-10 items-center justify-center">
        {data.frontendSkills.map((item) => (
          <img
            src={item.logo}
            alt={item.title}
            key={item.title}
            className="w-20"
          />
        ))}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-9 h-9 text-indigo-400 hover:bg-slate-900 hover:bg-opacity-10 transition rounded-full cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}
