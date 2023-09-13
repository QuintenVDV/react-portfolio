import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import AboutMeCard from "./AboutMe/AboutMeCard";
export default function Home() {
  return (
    <div className="w-full flex flex-row gap-10 items-center justify-center ">
      <div className="w-full flex flex-col gap-10 md:w-[800px] h-[100px] items-center justify-between">
        <div>
          <Header />
        </div>
        <div className="">
          <Skills />
        </div>
        <div className="">
          <AboutMeCard />
        </div>
      </div>
    </div>
  );
}
