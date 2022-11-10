import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Loading } from '@/assets/imgs/loading.svg';
import './index.css';

const IconLoading: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <span className={classNames('icon', 'icon-spin')}><Loading {...props} /></span>;
};

export default IconLoading;
