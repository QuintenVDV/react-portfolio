import SkillsScroller from "./SkillsScroller";
export default function Skills() {
  return (
    <div className="w-full md:w-[700px] flex flex-wrap items-center justify-between bg-dark-purple bg-opacity-70 rounded-3xl">
      <div className="flex py-6 px-8 w-full gap-10 items-center justify-center">
        <div className="w-fit flex flex-col gap-3 items-center justify-center">
          <div>
            <hr className="w-1/2 mx-auto h-[5px] rounded-xl border-none bg-gradient-to-r from-purple-nav-from to-blue-200" />
            <div className="text-2xl font-pixel skills-title text-center text-blue-200">
              Explore my skills
            </div>
          </div>
          <div className=" text-center text">
            Scroll through my skills and see what I can do for you!
          </div>
          <SkillsScroller />
        </div>
      </div>
    </div>
  );
}
