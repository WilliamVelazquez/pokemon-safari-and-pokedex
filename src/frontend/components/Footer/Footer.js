import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';

import 'react-flags-select/css/react-flags-select.css';
import './styles.css';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const setLanguage = lng => {
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
  };

  const onSelectFlag = (countryCode) => {
    setLanguage(t(`languages.${countryCode}`));
  }

  return (
    <footer className='footer'>
      <ReactFlagsSelect 
        defaultCountry = { t(`countryCode.${localStorage.getItem('language')||'en'}`) || 'US'}
        countries = {['US', 'MX']} 
        customLabels = {{'US': 'EN-US','MX': 'ES-MX'}} 
        showSelectedLabel = {true}
        onSelect = {onSelectFlag}
        placeholder = { t('languagePlaceHolder') }
      />
    </footer>
  );
}

export default Footer;