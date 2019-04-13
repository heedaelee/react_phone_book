import React, { Component } from 'react';
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id=3;
  state={
    information:[
    {
      id:1,
      name:'김민준',
      phone:'000-000-0001'
    },
    {
      id:2,
      name:'홍길동',
      phone:'000-000-0002'
    }
  ]}

  handleCreate=(data) => {
    const {information} = this.state;
    this.setState({
      information:information.concat({id:this.id++,...data})
    });
  }

  render() {
    const {information}=this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate} //phoneForm객체 안에 onCreate를 프로퍼티로 넣는거임, <></>로 닫는게 아니라..
        />
        <PhoneInfoList data={this.state.information}/*자식에게 데이터 주는 법!!*/ />
        
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;
