import { css } from "@emotion/css";

function CompositionExThree() {
  return (
    <div>
      <h1>CompositionExThree</h1>
      <div>
        <div css={base}>This will be turquoise</div>
        <div css={[danger, base]}>
          This will be also be turquoise since the base styles overwrite the
          danger styles.
        </div>
        <div css={[base, danger]}>This will be red</div>
      </div>
    </div>
  );
}
export default CompositionExThree;

const danger = css`
  color: red;
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;
