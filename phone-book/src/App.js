//file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList' ;

class App extends Component {
  id=2
  state={
    information :[
      {
        id:0,
        name:'김민준',
        phone:'010-000-0000'
      },
      {
        id:1,
        name:'홍길동',
        phone:'010-000-0001'
      }
    ],
    keyword:''
  }
    
  handleChange = (e) => {
    this.setState({
      keyword:e.target.value,
    });
  }
  handleCreate = (data) =>{
    const {information} = this.state;
    this.setState({
      information: information.concat({id:this.id++, ...data})
    })
  }
  handleRemove = (id)=>{
    const {information} =this.state;
    this.setState({
      information:information.filter(info=>id!==info.id)
    })
  }
  handleUpdate = (id,data)=>{
    const {information} = this.state;
    this.setState({
      information:information.map(
        info=>info.id===id
        ?{...info,...data}//새 객체를 만들어서 기존의 값과 전달받은 data를 덮어쓰고 반환
        :info // id가 다르면 걍 유지후 반환
      )
    })
  }
  render() {
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <p>
          <input 
            value={keyword}
            onChange={this.handleChange}
            placeholder="검색어를 입력하세요"
          />
        </p>
        <hr />
        <PhoneInfoList 
          data={filteredList} //요 3개를 아래로 전달, 검색 필터()를 거친 배열을 보냄
          onRemove={this.handleRemove} 
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
