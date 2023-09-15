import Header from "./Header/ProjectsHeader";
export default function Projects() {
  return (
    <div className="w-full flex flex-row gap-10 items-center justify-center ">
      <div className="w-full flex flex-col gap-10 md:w-[800px] h-[100px] items-center justify-between">
        <div>
          <Header />
        </div>
      </div>
    </div>
  );
}
