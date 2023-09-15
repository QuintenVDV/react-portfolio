export default function ContactMeCard() {
  return (
    <div className="w-[500px] flex flex-col bg-light-brown rounded-md border-1 shadow-xl">
      <div className="  flex flex-row justify-between bg-light-purple p-2 rounded-t-md">
        <div className="text-gray-800">Contact me</div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-minus"
          >
            <path d="M5 12h14" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-maximize"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      </div>

      <div className="justify-center w-full">
        <div className="py-2 text-center">
          <p className="self-center font-pixel text-2xl text-black font-semibold">
            Contact me
          </p>
          <p className="text-black">Reach out by using this form!</p>
        </div>
        <div>
          <form className="flex flex-col p-2 justify-center items-center gap-2">
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-black w-2/3"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-black w-2/3"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border-2 border-black w-2/3"
            />
            <textarea
              placeholder="Message"
              className="border-2 border-black w-2/3"
            ></textarea>
            <button className="border shadow-black px-4 py-1 border-1 border-black bg-light-pink rounded-xl shadow-2xl text-white font-semibold font-pixel w-fit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
