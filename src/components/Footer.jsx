import { FaWhatsapp, FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t-4 border-t-[rgb(54,188,195)] mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Logo / Name */}
        <div className="text-xl font-bold tracking-wide text-[rgb(54,188,195)] hover:scale-105 transition-transform duration-300">
          © 2025 Sasank Kota
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          <a
            href="https://wa.me/8919636850"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaWhatsapp className="text-4xl text-white hover:text-[rgb(54,188,195)] transition-colors duration-300" />
          </a>
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaFacebookSquare className="text-4xl text-white hover:text-[rgb(54,188,195)] transition-colors duration-300" />
          </a>
          <a
            href="https://instagram.com/sasank_dj"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram className="text-4xl text-white hover:text-[rgb(54,188,195)] transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/sasankdj"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaGithub className="text-4xl text-white hover:text-[rgb(54,188,195)] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
