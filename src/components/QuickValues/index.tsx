import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

type QuickValuesProps = {
  onSelect: (value: number) => void;
};

const QuickValues = ({ onSelect }: QuickValuesProps) => {
  const { t } = useTranslation();

  const presets = [
    { key: 'phone', emoji: '📱', value: 5000 },
    { key: 'car', emoji: '🚗', value: 70000 },
    { key: 'house', emoji: '🏠', value: 300000 },
    { key: 'coffee', emoji: '☕', value: 8 },
    { key: 'airpods', emoji: '🎧', value: 1400 },
    { key: 'trip', emoji: '✈️', value: 10000 },
  ];

  return (
    <div className="quick-values">
      {presets.map((item) => (
        <button
          key={item.key}
          className="quick-button"
          onClick={() => onSelect(item.value)}
        >
          {item.emoji} {t(`quickValues.${item.key}`)}
        </button>
      ))}
    </div>
  );
};

export default QuickValues;
