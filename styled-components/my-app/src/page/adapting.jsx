import styled from 'styled-components'

function Adapting() {
  return (
    <div>
      <h1>Adapting based on props</h1>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  )
}

export default Adapting;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
