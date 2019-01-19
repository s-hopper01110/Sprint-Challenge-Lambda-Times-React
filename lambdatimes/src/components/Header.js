import React from 'react';
import styled from 'styled-components'


const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

`;

const Date = styled.div`
  margin-left: 25px;
  flex: 1;
`;

const HeaderOne = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;

`;




const Temp = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Headers>
      <Date>
      <span>MARCH 32, 2018</span>
      </Date>


      <HeaderOne>
      <h1>Lambda Times</h1>
      </HeaderOne>


      <Temp>
      <span className="temp">98°</span>
      </Temp>


    </Headers>
  )
}

export default Header;