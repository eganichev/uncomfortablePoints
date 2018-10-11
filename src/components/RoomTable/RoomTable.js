import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import RoomRow from '../RoomRow';
import './styles.css';

export const RoomTable = ({ row, column, matrix }) => {
  
  const table = [];
  for (let i = 0; i < row; i++) {
    table.push(
      <Row key= { i } className='wrap-row'>
        <RoomRow i={ i } row={row} column={ column } matrix={ matrix }/>
      </Row>
      
    )
  }
 return ( <div className='room-table'>
    {
      table
    }
  </div>
 );
}

RoomTable.propTypes = {
  row: PropTypes.number.isRequired, 
  column: PropTypes.number, 
  matrix: PropTypes.array.isRequired
}
