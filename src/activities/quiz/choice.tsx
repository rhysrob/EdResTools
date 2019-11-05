import React, { FC, useState, useEffect } from 'react';
import { css } from '@emotion/core';

import { ChoiceType } from 'src/types/quiz';
import { ColorPalette } from 'wjec-one';

type Props = {
  choiceData: ChoiceType;
  onClick: any;
  round: number;
};

const Choice: FC<Props> = ({ onClick, choiceData, round }) => {
  const [colour, setColour] = useState();
  const [thisRound] = useState(round);

  useEffect(() => {
    if (thisRound > 1) {
      if (choiceData.isCorrect && choiceData.userSelect) {
        setColour('green');
      } else if (!choiceData.isCorrect && choiceData.userSelect) {
        setColour('red');
      }
    } else if (choiceData.userSelect) {
      setColour('gold');
    }
  });

  return (
    <div
      css={styles.choiceItem}
      style={choiceData.isSelected ? { background: ColorPalette.secondary } : null} onClick={onClick} >
      <h1 style={choiceData.userSelect ? { color: colour } : { color: ColorPalette.font }}>{choiceData.choiceTxt}</h1>
    </div >
  );
};
export default Choice;

const styles = {
  choiceItem: css`
    cursor:pointer;
    background:${ColorPalette.primary};
    padding-left:20px;
  `
};
