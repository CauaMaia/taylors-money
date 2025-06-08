import React, { useState } from 'react';
import './style.css';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import ResultBox from '../ResultBox';
import QuickValues from '../QuickValues';
import { useTranslation } from 'react-i18next';

const currencyRates: Record<string, number> = {
  brl: 1,
  usd: 5.30,
  eur: 5.70,
  gbp: 6.20,
};

const currencySymbols: Record<string, string> = {
  brl: 'R$',
  usd: 'USD',
  eur: 'EUR',
  gbp: 'GBP',
};

const Form = () => {
  const { t } = useTranslation();

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('brl');
  const [result, setResult] = useState<{ original: number; taylor: number; symbol: string } | null>(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const parsed = parseFloat(amount.replace(',', '.'));
      if (isNaN(parsed) || parsed <= 0) throw new Error();

      const valueInBRL = parsed * currencyRates[currency];
      const taylorEquivalent = valueInBRL * 0.0083;

      setResult({
        original: valueInBRL,
        taylor: taylorEquivalent,
        symbol: currencySymbols[currency],
      });
      setError(false);
    } catch {
      setResult(null);
      setError(true);
    }
  };

  const resetForm = () => {
    setAmount('');
    setResult(null);
    setError(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        label={t('inputLabel')}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder={t('placeholder')}
      />

      <QuickValues onSelect={(v) => setAmount(v.toString())} />

      <Select
        label={t('selectLabel')}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        options={[
          { label: 'Real (BRL)', value: 'brl' },
          { label: 'Dólar (USD)', value: 'usd' },
          { label: 'Euro (EUR)', value: 'eur' },
          { label: 'Libra (GBP)', value: 'gbp' },
        ]}
      />

      <Button label={t('calculate')} type="submit" />

      {result && !error && (
        <ResultBox
          originalValue={result.original}
          taylorValue={result.taylor}
          currencySymbol={result.symbol}
          onRetry={resetForm}
        />
      )}

      {error && (
        <ResultBox
          originalValue={0}
          taylorValue={0}
          currencySymbol=""
          hasError
          onRetry={resetForm}
        />
      )}
    </form>
  );
};

export default Form;
