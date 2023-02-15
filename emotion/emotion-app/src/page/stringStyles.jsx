import { css } from "@emotion/css";

function StringStyles() {
  return (
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
  );
}

export default StringStyles;

const color = "blue";
