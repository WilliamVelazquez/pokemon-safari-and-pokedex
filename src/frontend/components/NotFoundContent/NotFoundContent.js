import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import NotFoundImage from '../../assets/images/not-found.png';
import './styles.css';

const NotFoundContent = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <div className='notFound__container'>
      <Link to='/'>
        <img src={NotFoundImage} alt='Not Found Icon' />
      </Link>
      <h1>
        {t('pageNotFound')}
      </h1>
      {children}
    </div>
  );
};

export default NotFoundContent;
