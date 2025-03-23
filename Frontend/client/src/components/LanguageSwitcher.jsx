import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const languages = [
  { code: "en", label: "🇺🇸 English" },
  { code: "es", label: "🇪🇸 Español" },
  { code: "fr", label: "🇫🇷 Français" },
  { code: "de", label: "🇩🇪 Deutsch" },
  { code: "hi", label: "🇮🇳 हिन्दी" },
  { code: "ar", label: "🇸🇦 العربية" },
  { code: "ru", label: "🇷🇺 Русский" },
  { code: "pt", label: "🇵🇹 Português" },
  { code: "it", label: "🇮🇹 Italiano" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-400 text-sm">Language:</span>
      <select
        className="bg-gray-800 text-white text-sm px-3 py-1 rounded-md outline-none"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
