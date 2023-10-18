import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "About Us",
    links: ["Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "A&Q"],
  },
];

const currentYear = new Date().getFullYear();

function FooterComponent() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap -mx-4 mb-8">
          {SITEMAP.map(({ title, links }, key) => (
            <div
              key={key}
              className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0"
            >
              <Typography variant="h6" color="white" className="mb-6">
                {title}
              </Typography>
              <ul className="list-none">
                {links.map((link, key) => (
                  <li key={key} className="mb-2">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition ease-in duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <Typography
            variant="body2"
            color="gray-400"
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            &copy; {currentYear}{" "}
            <a
              href="https://material-tailwind.com/"
              className="text-white hover:text-gray-300 transition ease-in duration-300"
            >
              Material Tailwind
            </a>
            . All Rights Reserved.
          </Typography>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition ease-in duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition ease-in duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition ease-in duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition ease-in duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
