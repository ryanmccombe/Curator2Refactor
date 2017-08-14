import React from 'react';

import icon from './scroll_icon.png';
import style from './scrollIndicator.less'

export default ({ width }) =>
  <img className={style.scrollIndicator} src={icon} width={width} />