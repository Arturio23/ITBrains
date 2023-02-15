import styled from "styled-components";

function StyleObjects() {
    return (
      <>
        <h1>Style Objects</h1>
        <Container>
          <Box />
          <PropsBox background="blue" />
        </Container>
      </>

    )
}

export default StyleObjects

// Static object
const Box = styled.div({
  background: 'palevioletred',
  height: '50px',
  width: '50px'
});

// Adapting based on props
const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));
const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`

