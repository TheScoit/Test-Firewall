import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">firewall</h2>
          <p className="mt-2 text-gray-400">
            Protecting your digital world with cutting-edge security solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="space-y-3">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/service'>Service</Link></li>
              <li><Link to='/pricing'>Pricing</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </div>
            <div className="space-y-3">
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/network'>Network</Link></li>
              <li><Link to='/help'>Help</Link></li>
              <li><Link to='/stories'>Shared Stories</Link></li>
            </div>
            <div className="space-y-3">
              <li><Link to='/code'>Code of Conduct</Link></li>
              <li><Link to='/tools'>Developers Tools</Link></li>
              <li><Link to='/news'>Firewall News</Link></li>
              <li><Link to='/maintainers'>Maintainers</Link></li>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            <Link to='/'><FaFacebook size={24} /></Link>
            <Link to='/'><FaTwitter size={24} /></Link>
            <Link to='/'><FaLinkedin size={24} /></Link>
            <Link to='/'><FaGithub size={24} /></Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} firewall. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
