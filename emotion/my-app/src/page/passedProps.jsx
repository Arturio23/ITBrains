import styled from 'styled-components'

function passedProps() {
  return (
    <div>
      <h1>Passed props</h1>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    </div>
  )
}

export default passedProps;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
