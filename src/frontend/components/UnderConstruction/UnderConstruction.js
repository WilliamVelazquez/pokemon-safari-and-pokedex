import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UnderConstructionImage from '../../assets/images/under-construction.gif';
import './styles.css';

const UnderConstruction = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <div className='underConstruction__container'>
      <Link to='/'>
        <img src={UnderConstructionImage} alt='Under Construction Icon' />
      </Link>
      <h1>
        {t('pageUnderConstruction')}
      </h1>
      {children}
    </div>
  );
};

export default UnderConstruction;
