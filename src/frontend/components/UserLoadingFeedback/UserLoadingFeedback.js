import React from 'react';
import { useTranslation } from 'react-i18next';

import EllipsisLoader from '../EllipsisLoader/EllipsisLoader';

import './styles.css';

const UserLoadingFeedback = (props) => {
	const { t } = useTranslation();
	const { isLoading } = props;

  return (
    <>
			{
				isLoading ?
				<div className='list__user__feedback'><EllipsisLoader /></div>
				:
				<div className='list__user__feedback'><h2>{t('userFeedback')}</h2><p>{t('tryAgainLater')}</p></div>
			}
    </>
  );
};

export default UserLoadingFeedback;
