import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher"; // Import Language Switcher
import { useTranslation } from "react-i18next"; // Import Translation Hook

const Footer = () => {
  const { t } = useTranslation(); // Access translations

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto  px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left ">
        
        {/* Brand Section */}
        <div className="">
          <h2 className="text-2xl font-bold">Firewall</h2>
          <p className="mt-2 text-gray-400">
            {t("footer_text")} {/* Translated text */}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left ">
          <h3 className="text-lg font-semibold text-center">{t("quick_links")}</h3>
          <div className="mt-2 flex flex-col sm:flex-row sm:justify-start md:justify-start lg:gap-8 text-nowrap lg:mx-0 w-full">
            <ul className="space-y-3 sm:text-left">
              <li><Link to='/'>{t("home")}</Link></li>
              <li><Link to='/service'>{t("service")}</Link></li>
              <li><Link to='/pricing'>{t("pricing")}</Link></li>
              <li><Link to='/contact'>{t("contact")}</Link></li>
            </ul>
            <ul className="space-y-3 sm:text-left">
              <li><Link to='/about'>{t("about")}</Link></li>
              <li><Link to='/help'>{t("help")}</Link></li>
              <li><Link to='/network'>{t("network")}</Link></li>
              <li><Link to='/stories'>{t("shared_stories")}</Link></li>
            </ul>
            <ul className="space-y-3 sm:text-left">
              <li><Link to='/maintainers'>{t("maintainers")}</Link></li>
              <li><Link to='/news'>{t("firewall_news")}</Link></li>
              <li><Link to='/tools'>{t("dev_tools")}</Link></li>
              <li><Link to='/code'>{t("code_of_conduct")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Language Switcher */}
        <div className="text-center md:text-left mx-28 ">
          <h3 className="text-lg font-semibold lg:text-center text-nowrap -mx-10">{t("follow_us")}</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            <Link to='/'><FaFacebook size={24} /></Link>
            <Link to='/'><FaTwitter size={24} /></Link>
            <Link to='/'><FaLinkedin size={24} /></Link>
            <Link to='/'><FaGithub size={24} /></Link>
          </div>

          {/* Language Switcher */}
          <div className="mt-4 flex items-center justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Firewall. {t("all_rights_reserved")}
      </div>
    </footer>
  );
};

export default Footer;
