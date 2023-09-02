import Header from "./Header/Header";
export default function Home() {
  return (
    <div className="w-full flex  flex-row gap-10 items-center justify-center ">
      <div className="w-full md:w-[800px] h-[100px] items-center justify-between">
        <Header />
      </div>
    </div>
  );
}
