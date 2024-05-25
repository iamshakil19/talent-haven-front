import { Link } from "react-router-dom";
import Container from "../../Container";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { config } from "./Footer.config";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { staticText } = config;

  return (
    <div>
      <Container className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div>
            <img src={staticText.logo} alt="" className="w-36" />
            <p className="mb-1 mt-6 text-lg">{staticText.CallUs}</p>
            <Link to="" className="text-lg text-primary-blue block">
              {staticText.phoneNumber}
            </Link>

            <p className="text-sm text-primary-gray mt-5">
              {staticText.address}
            </p>
            <Link
              to={`mailto:${config.staticText.email}`}
              className="text-sm text-primary-gray mt-3 block hover:text-primary-blue"
            >
              {staticText.email}
            </Link>
          </div>
          {staticText.candidates?.map((item) => (
            <div key={item.id}>
              <p className="text-lg mb-5">{item?.title}</p>

              {item?.links?.map((link) => (
                <Link
                  className="block hover:text-primary-blue mb-3 text-sm text-primary-gray"
                  key={link.id}
                  to={link.path}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>

      <p className="border-t"></p>
      <Container className="p-5 md:flex flex-row-reverse justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <Link
            to={staticText.facebook}
            className="h-9 w-9 bg-primary text-background flex justify-center items-center rounded-full text-xl hover:bg-primary/90 transition-all duration-300 ease-in-out"
          >
            <FaFacebookF className="" />
          </Link>
          <Link
            to={staticText.linkedin}
            className="h-9 w-9 bg-primary text-background flex justify-center items-center rounded-full text-xl hover:bg-primary/90 transition-all duration-300 ease-in-out"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <p className="flex items-center flex-wrap justify-center gap-1 tracking-wide mt-5 md:mt-0 text-sm text-primary-gray">
          © {currentYear} {staticText.projectName}
          <Link
            target="blank"
            to={staticText.linkedin}
            className="hover:text-primary-blue hover:underline"
          >
            {staticText.creator}
          </Link>
          {staticText.copyright}
        </p>
      </Container>
    </div>
  );
};

export default Footer;
