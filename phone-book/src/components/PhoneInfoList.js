// src/components/PhoneInfoList.js
import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        list:[],
        onRemove: ()=> console.warn('onRemove not defined'), //onRemove함수가 app.js에서 전달되지 않았을 경우 대비
        onUpdate: ()=> console.warn('onUpdate not defined')
    }

    shouldComponentUpdate(nextProps, nextState){ //기본 true 반환
        return nextProps.data!==this.props.data //다음에 올 props.data와 현재 가진 props.data가 같지 않다면 true반환
    }

    render() {
        console.log('render PhoneInfoList');
        const {data,onRemove,onUpdate} = this.props;
        const list = data.map( //data를 가져와 map을 통하여 JSX로 변환,
            info => (<PhoneInfo 
                key={info.id} //key는 리액트 배열 렌더링할때 꼭 필요한 값, 배열의 index가아니라 고유값을 줘야함.
                info={info}
                onRemove={onRemove}//12번 onRemove 사용, this.props로 갖고와 <PhoneInfo>에 전달
                onUpdate={onUpdate}
                />)
        );
        return(
            <div>
                {list}
            </div>
        );
    }
}
export default PhoneInfoList;