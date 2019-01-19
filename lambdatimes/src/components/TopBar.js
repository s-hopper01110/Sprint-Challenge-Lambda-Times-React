import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
}

`;

const ContainerCenter = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;

`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;


`;

const TopicsWord = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;

`;


const SearchWord = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;

`;






const TopBar = () => {
  return (
    <TopHeader>
       <Container>
        
        <ContainerLeft>


              <TopicsWord>
                <span>TOPICS</span>
              </TopicsWord>


              <SearchWord>
                <span>SEARCH</span>
              </SearchWord>


        </ContainerLeft> 

        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>

        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>

        
      </Container>  
    </TopHeader>
  )
}

export default TopBar;