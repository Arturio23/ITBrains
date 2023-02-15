import { css } from "@emotion/css";

function StringStyles() {
  return (
    <div>
      <h1>String Styles</h1>
      <div
        className={css`
          background-color: hotpink;
          &:hover {
            color: ${color};
          }
        `}
      >
        This has a hotpink background.
      </div>
    </div>
  );
}

export default StringStyles;

const color = "blue";
