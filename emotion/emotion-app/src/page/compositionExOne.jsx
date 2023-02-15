import { css } from "@emotion/css";

function CompositionExOne() {
  return (
    <div
      css={css`
        ${base};
        background-color: brown;
      `}
    >
      <h1>CompositionExOne</h1>
      This is hotpink.
    </div>
  );
}

const base = css`
  color: chartreuse;
`;

export default CompositionExOne;
