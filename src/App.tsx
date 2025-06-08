import React from 'react';
import Form from './components/Form';
import LanguageSelector from './components/LanguageSelector';
import './App.css';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <div className="app-background" />

      <LanguageSelector />

      <h1 className="app-title">{t('title')}</h1>
      <p className="app-subtitle">{t('subtitle')}</p>

      <Form />
    </div>
  );
};

export default App;
