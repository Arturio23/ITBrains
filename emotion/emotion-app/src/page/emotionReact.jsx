import { Global, ClassNames } from "@emotion/react";
import { css } from "@emotion/css";

function EmotionReact() {
  return (
    <div css={{ color: "hotpink" }}>
      <h1>@emotion/react</h1>
      <div
        css={css`
          color: green;
        `}
      />
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <ClassNames>
        {({ css, cx }) => (
          <div
            className={cx(
              "some-class",
              css`
                color: yellow;
                background-color: green;
              `
            )}
          >
            <h1>
              This is <br />
              @emotion/react
            </h1>
          </div>
        )}
      </ClassNames>
    </div>
  );
}

export default EmotionReact;
