import React from 'react';
import './style.css';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

type ResultBoxProps = {
  originalValue: number;
  taylorValue: number;
  hasError?: boolean;
  onRetry: () => void;
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 6,
  }).format(value);
};

const ResultBox = ({
  originalValue,
  taylorValue,
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
        🧍 {t('youSpent')} <strong>{formatCurrency(originalValue)}</strong>
      </p>
      <p>
        👑 {t('taylorSpent')} <strong>{formatCurrency(taylorValue)}</strong>
      </p>
    </div>
  );
};

export default ResultBox;
