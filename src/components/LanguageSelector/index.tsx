import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLang('pt')}>
        🇧🇷 <span>Português</span>
      </button>
      <button onClick={() => changeLang('en')}>
        🇺🇸 <span>English</span>
      </button>
    </div>
  );
};

export default LanguageSelector;
