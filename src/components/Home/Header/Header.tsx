import Banner from "../../Banner";
import notification from "../../../assets/notification.png";

export default function Header() {
  return (
    <div className="flex flex-col gap-5 items-center justify-between h-full">
      <Banner text="Welcome to my portfolio" />
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex flex-col w-1/2 ">
          <div className="">
            <p className="text-xl font-light text-white">Hello there!👋</p>
            <p className="flex text-2xl font-medium text-white">
              I am &nbsp;
              <span className=" text-blue-200">Quinten Van de vreken</span>
              &nbsp; a,
            </p>
            <p className="flex text-4xl font-PressStart2P font-medium text-white">
              <span className=" text-blue-200">Full Stack Developer</span>
            </p>
            <hr className="w-1/2 mt-5 h-[5px] border-none bg-gradient-to-r from-purple-nav-from from-60% to-blue-200" />
          </div>
          <div className="flex flex-col mt-5 text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sed,
            temporibus architecto quis facere modi tempore voluptas,
            consequuntur quas possimus officiis quidem natus qui praesentium
            reiciendis fugit mollitia iste. Ad?
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-center justify-center">
          <img
            src={notification}
            alt={notification}
            className="justify-center"
          />
        </div>
      </div>
    </div>
  );
}
