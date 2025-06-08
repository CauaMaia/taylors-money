import React from 'react';
import './style.css';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

type ResultBoxProps = {
  originalValue: number;
  taylorValue: number;
  currencySymbol?: string;
  hasError?: boolean;
  onRetry: () => void;
};

const formatCurrency = (value: number, currency: string) => {
  const currencyMap: Record<string, { locale: string; code: string }> = {
    'R$': { locale: 'pt-BR', code: 'BRL' },
    'USD': { locale: 'en-US', code: 'USD' },
    'EUR': { locale: 'de-DE', code: 'EUR' },
    'GBP': { locale: 'en-GB', code: 'GBP' },
  };

  const config = currencyMap[currency] || currencyMap['R$'];

  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.code,
    maximumFractionDigits: 6,
  }).format(value);
};

const ResultBox = ({
  originalValue,
  taylorValue,
  currencySymbol = 'R$',
  hasError = false,
  onRetry,
}: ResultBoxProps) => {
  const { t } = useTranslation();

  if (hasError) {
    return (
      <div className="result-box error">
        <p>{t('error')}</p>
        <Button label={t('retry')} onClick={onRetry} />
      </div>
    );
  }

  return (
    <div className="result-box">
      <p>
        🧍 {t('youSpent')} <strong>{formatCurrency(originalValue, currencySymbol)}</strong>
      </p>
      <p>
        👑 {t('taylorSpent')} <strong>{formatCurrency(taylorValue, currencySymbol)}</strong>
      </p>
    </div>
  );
};

export default ResultBox;
