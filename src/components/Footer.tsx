const footerLinks = [
  {
    label: "Diensten",
    href: "../html/Services/services.html",
    icon: "facebook",
  },
  {
    label: "Projecten",
    href: "../html/Projects/projects.html",
    icon: "instagram",
  },
  { label: "Over ons", href: "../html/AboutUs/aboutUs.html", icon: "linkedin" },
  { label: "Contact", href: "../html/Contact/contact.html", icon: "twitter" },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 md:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {footerLinks.map((link, index) => (
            <div key={index} className="px-5 py-2">
              <a
                href={link.href}
                className="text-base text-gray-500 hover:text-white transition"
              >
                {link.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              <span className="sr-only">{link.label}</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* You can add your icon logic here based on link.icon */}
                {link.icon === "facebook" && (
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                )}
                {/* You can add more icons here */}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
