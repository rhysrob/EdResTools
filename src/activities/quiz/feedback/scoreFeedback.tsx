import React, { FC, useContext } from 'react';
import { css } from '@emotion/core';

import LangContext from 'src/LangContext';
import { ColorPalette } from 'wjec-one';

type Props = {
  max: number;
  score: number;
};

const ScoreFeedback: FC<Props> = ({ score, max }) => {
  const { language } = useContext(LangContext);

  return (
    <div css={score === max ? styles.fullScore : styles.scoreFeedback} >
      {language === 'en' ? <h2>You scored {score} out of {max}</h2> : <h2>{score} allan o {max}</h2>
      }
      {score === max ? <h4>Well Done</h4> : null}
    </div >
  );
};

export default ScoreFeedback;

const styles = {
  scoreFeedback: css`
    background:${ColorPalette.warning};
    margin-bottom:10px;
    padding-left:5px;
  `,
  fullScore: css`
    background:${ColorPalette.success};
    margin-bottom:10px;
    padding-left:5px;
  `
};
