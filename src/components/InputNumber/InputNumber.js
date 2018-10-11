import React from 'react';
import { InputNumber } from 'antd';
import PropTypes from 'prop-types';
import './styles.css';

export const InputNumberWrap = (props) =>(
  <div className='input-number'>
    <label className='title'>
      {props.placeholder}
    </label>
    <InputNumber {...props}/>
  </div>
)

InputNumberWrap.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number.isRequired,
  placeholder: PropTypes.string
}