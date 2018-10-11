import React, { Component } from 'react';
import { Col, Row, Button, message} from 'antd';
import InputNumber from './components/InputNumber';
import RoomTable from './components/RoomTable';
import {shuffle, createpeopleNames, generateRoom, amountUnhappy } from './utils';
import './App.css';
const ZERO = 0;

class App extends Component {
  state = {
    row: ZERO,
    column: ZERO,
    people: ZERO,
    status: false
  }
  chnageRow= (row) =>{
    if (row < 0 || !Number.isInteger(row)) return;
    this.setState({ row, status: false })
  }
  chnageColumn= (column) =>{
    if (column < 0 || !Number.isInteger(column)) return;
    this.setState({ column, status: false })
  }
  chnagepeople= (people) =>{
    if (people < 0 || !Number.isInteger(people)) return;
    this.setState({ people, status: false })
  }
  clickButton = () => {
    const { row, column, people } = this.state;
    if (people > row  * column){
      message.info('Amount of places is\'t correct!');
      return;
    }
    this.setState({ status: true });
  }
  
  render() {
    const { row, column, people, status } = this.state;
    let peopleMatrix, peopleNames = [], amount;
    const countPoints = row * column;
    if (status) {            
      peopleNames = createpeopleNames(peopleNames, people, countPoints);      
      peopleNames = shuffle(peopleNames);      
      peopleMatrix = generateRoom(peopleNames, row, column);   
      amount = amountUnhappy(peopleMatrix, row, column);
    }
    return (
      <React.Fragment>
        <Row>
          <Col span={12} offset={6} className='tools-block'>
            <InputNumber 
              value={row}
              onChange={this.chnageRow} 
              defaultValue={ZERO} 
              placeholder='Row count'/>
            <InputNumber 
              value={column}
              onChange={this.chnageColumn} 
              defaultValue={ZERO} 
              placeholder='Column count'/>
            <InputNumber 
              value={people}
              onChange={this.chnagepeople} 
              defaultValue={ZERO} 
              placeholder='people count'/>
            <Button type='primary' onClick={this.clickButton}>Check</Button>
          </Col>
        </Row>
        { status &&
          <Row>
            <Col span={12} offset={6} className='table-block'>
              <RoomTable row={ row } column={ column } matrix = { peopleMatrix } />
            </Col>
          </Row>          
        }
        <Row className='amount'>
          { status && `${amount} uncomfortable points`}
        </Row>
      </React.Fragment>
      
     
    ); 
  }
}

export default App;
