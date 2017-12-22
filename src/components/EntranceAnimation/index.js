import React, { Component } from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from 'react-motion'

const colors = [
'#BBDEFB',
'#90CAF9',
'#64B5F6',
'#42A5F5',
];

const Wrapper = styled.div`
  min-width: 100vw;
  height: 100vh;
`;

const Box = styled.div`
  flex-basis: 100%;
  height: ${(props) => props.height}%;
  background: ${(props) => props.color};
`;

const ContentWrapper = styled.div`
  flex-basis: 100%;
`;

class EntranceAnimation extends Component {
  render() {
    const initHeight = 100;
    const { children } = this.props;
    return (
      <StaggeredMotion
        defaultStyles={[
          { height: initHeight },
          { height: initHeight },
          { height: initHeight },
          { height: initHeight },
          ]}
        styles={(prevStyles) => [
          { height: spring(0) },
          { height: prevStyles[0].height },
          { height: prevStyles[1].height },
          { height: prevStyles[2].height },
          ]}
      >
        {(styles) => 
          <Wrapper>
            <Box height={styles[0].height} color={colors[0]}/>
            <Box height={styles[1].height} color={colors[1]}/>
            <Box height={styles[2].height} color={colors[2]}/>
            <Box height={styles[3].height} color={colors[3]}/>
            <ContentWrapper>
              {children}
            </ContentWrapper>
          </Wrapper>
        }
      </StaggeredMotion>
    );
  }
}


export default EntranceAnimation;
