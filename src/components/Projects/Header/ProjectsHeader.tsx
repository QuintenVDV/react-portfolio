import Banner from "../../Banner";
export default function Header() {
  return (
    <div className="flex flex-col gap-2 items-center justify-between h-full">
      <Banner text="Welcome to my projects!" />
      <div className="text-lg font-pixel text-white font-light">
        Take a look at my projects and dont hesitate to contact me!
      </div>
    </div>
  );
}
