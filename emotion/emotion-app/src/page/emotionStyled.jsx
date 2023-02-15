import styled from "styled-components";

function EmotionStyled() {
  return (
    <div>
      <SomeComp>
        <h1>Emotion Styled</h1>
        <AnotherComp color="green">Emotion Styled</AnotherComp>
      </SomeComp>
    </div>
  );
}

let SomeComp = styled.div({
  color: "hotpink",
});

let AnotherComp = styled.div`
  color: ${(props) => props.color};
`;

export default EmotionStyled;
