import pixel_quinten from "/assets/quinten_pixel.png";

export default function AboutMeCard() {
  return (
    <div className="py-10">
      <div className="flex flex-row w-[800px] bg-gray-200 bg-opacity-10 border-sky-100 border-2 h-fit ">
        <div className="w-1/4 relative bottom-0 ">
          <img
            src={pixel_quinten}
            alt="its a me"
            className="absolute left-0 bottom-0"
          />
        </div>
        <div className="flex flex-col w-3/4 py-10 items-start px-5">
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            minus, eius cumque veniam quaerat nemo saepe odit soluta
            necessitatibus, dolores, libero ea perspiciatis et quis neque ipsa
            culpa! Impedit, perferendis.
          </p>

          <a className="self-end w-fit border-1 p-1 border-black bg-slate-500 font-pixel text-white">
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
