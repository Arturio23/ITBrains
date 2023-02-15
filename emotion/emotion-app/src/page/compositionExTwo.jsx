import { css } from "@emotion/css";

function CompositionExTwo() {
  return (
    <div>
      <h1>CompositionExTwo</h1>
      <style>
        {`
        .danger {
          color: red;
        }
        .base {
          background-color: lightgray;
          color: turquoise;
        }
      `}
        >
      </style>
      <p className="base danger">What color will this be?</p>
    </div>
  );
}

const base = css`
  color: chartreuse;
`;

export default CompositionExTwo;
