import styled from 'styled-components'

function ExtendingStylepart2() {
    return (
      <div>
        <h1>Extending Style part 2</h1>
        <Button>Normal Button</Button>
        <Button as="a" href="#">Link with Button styles</Button>
        <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
      </div>
    )
}

export default ExtendingStylepart2
// The Button from the last section without the interpolations
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: transparent;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
