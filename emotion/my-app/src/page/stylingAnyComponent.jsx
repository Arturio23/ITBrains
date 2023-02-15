import styled from 'styled-components'

function StylingAnyComponent() {
  return (
    <div>
      <h1>Styling Any Component</h1>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
  )
}

export default StylingAnyComponent;

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
