import React from 'react';
import PropTypes from 'prop-types';
import { border, formatBorder } from '../../utils';
import './styles.css';

export const RoomRow = ({ i, row, column, matrix }) => {
  const roomRow =[];
  for (let y = 0; y < column; y++) {
    const b = border([i, y], row, column, matrix);    
    const classBorder = formatBorder(b);
    roomRow.push(
      <div className={ classBorder } key= { y }>{`${matrix[i][y]}`}</div>
    )
  }
  return <div className='row' span={24}>{ roomRow }</div>;
}

RoomRow.propTypes = {
  i: PropTypes.number.isRequired, 
  row: PropTypes.number.isRequired, 
  column: PropTypes.number.isRequired, 
  matrix: PropTypes.array.isRequired
}