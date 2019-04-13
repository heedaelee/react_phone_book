import React, {Component} from "react";

class PhoneInfo extends Component {
    defaultProps ={

    }
    state={
        
    }


    render(){
        const style={

        }
        return(
            <div>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button>수정</button>
                <button>삭제</button>
            </div>
        );
    }
}
export default PhoneInfo;