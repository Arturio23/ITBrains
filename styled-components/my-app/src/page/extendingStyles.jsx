import styled from 'styled-components'

function ExtendingStyles() {
    return (
      <div>
            <h1>Extending Style part 1</h1>
            <Button>Normal Button</Button>
            <TomatoButton>Tomato Button</TomatoButton>
      </div>
    )
}

export default ExtendingStyles
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
    background-color: transparent;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

