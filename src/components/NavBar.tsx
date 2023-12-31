import "../dist/output.css";
import instagram from "../assets/logos/Socialmedia/instagram.png";
import linkedIn from "../assets/logos/Socialmedia/linkedinlogo.png";
import mail from "../assets/logos/Socialmedia/mail.png";

export default function NavBar() {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full flex items-center justify-center  ">
        <div className="w-full md:w-[800px] h-[100px] flex flex-wrap items-center justify-between bg-purple-nav-from rounded-xl py-2 px-10">
          <header className=" w-full ">
            <nav className=" flex flex-col md:flex-row max-w-7xl justify-between items-center ">
              <div className="navbar_section hidden text-white md:block flex flex-col lg:flex-row lg:gap-x-5">
                <a
                  className="group px-3 py-3 transition-all duration-300 ease-in-out"
                  href="/"
                >
                  <span className="defaultNavTitle">Home</span>
                </a>
                <a
                  className="group px-3 py-3 transition-all duration-300 ease-in-out"
                  href="/projects"
                >
                  <span className="defaultNavTitle">Projects</span>
                </a>
              </div>

              <div className="gap-3 flex h-3 lg:justify-end justify-between items-center">
                <a type="button" className="">
                  <img src={instagram} className="h-8" alt="insta" />
                </a>
                <a type="button" className="">
                  <img src={linkedIn} alt="linkedin" className=" h-8" />
                </a>

                <a type="button" className="hover:text-lime-900 transition">
                  <img src={mail} alt="mail" className="h-8" />
                </a>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
}
