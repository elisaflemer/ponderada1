import { useState } from "react";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    // Here you can implement the logic to update the language of your website
    // For example, you can use a library like i18next to handle translations
  };

  return (
    <footer className="">
      <hr></hr>
      <div className="flex justify-center py-4">
        <button
          className={`mx-2 p-2 rounded ${
            selectedLanguage === "pt"
              ? "bg-[#F56E45] text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => handleChangeLanguage("pt")}
        >
          Português
        </button>
        <button
          className={`mx-2 p-2 rounded ${
            selectedLanguage === "en"
              ? "bg-[#F56E45] text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => handleChangeLanguage("en")}
        >
          English
        </button>
        <button
          className={`mx-2 p-2 rounded ${
            selectedLanguage === "de"
              ? "bg-[#F56E45] text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => handleChangeLanguage("de")}
        >
          Deutsch
        </button>
      </div>
    </footer>
  );
};

export default Footer;
