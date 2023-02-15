import styled from 'styled-components'

function Start() {
    return (
      <Wrapper>
        <h1>Start</h1>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
    )
}

export default Start

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`
