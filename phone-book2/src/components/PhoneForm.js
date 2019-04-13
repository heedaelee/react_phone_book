import React, { Component } from 'react';

class PhoneForm extends Component {
    state={
        name:"",
        phone:""
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        //form 값 부모 전송
        this.props.onCreate(this.state);
        //전송후 value초기화
        this.setState({
            name:"",
            phone:""
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value //프로퍼티 한개씩 set 하는거 가능! state 변수가 1depts 일떄는 괜찮음
                                            //e.target.name은 표현식이라 [] 안쓰면 프로퍼티명으로 못넣음
        });
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        name="name"
                        placeholder="이름을 입력하세요"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        name="phone"
                        placeholder="전화번호를 입력하세요"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    <button type="submit">등록</button>
                </div>
            </form>
        </div>
        );
    }
}

export default PhoneForm;