import { FaWhatsapp, FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Name or Logo */}
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © 2025 Sasank kota
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://wa.me/8919636850" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300 text-4xl" />
          </a>
          <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300 text-4xl" />
          </a>
          <a href="https://instagram.com/sasank_dj" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300 text-4xl" />
          </a>
          <a href="https://github.com/sasankdj" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300 text-4xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
