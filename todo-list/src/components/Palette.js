import React from 'react';
import "./Palette.css"

    const Color = ({ color, active, onClick }) => {
      /* 구현 */
      
      return(
        <div className={`color ${active&&'active'}`} 
             onClick={onClick}
             style={{background:color}}
        />
        //active true가 오면 className=이 바뀐다.
      );
    }
    
    const Palette = ({colors, selected, onSelect}) => {
      /* 구현 */
      console.log(colors);
      
      const colorList = colors.map(
                    color=> (<Color 
                              key={color}
                              color={color}
                              active={selected === color}
                              /* 걸작임. active를 true false를 줘야 하는데
                              selected color랑 걍 리스트로 뿌려준 color랑 비교해서
                              던져줄수 있게 만듦!!
                              */
                              onClick={()=>onSelect(color)}
                              />//handler 없이 익명함수 내부함수로 바로 부모에 값전달 방법 유용!!!      
                            ) 
                  );
      return(
        <div className="palette">
          {colorList}
       </div>
      );
    };

  

export default Palette;