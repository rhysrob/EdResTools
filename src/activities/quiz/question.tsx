import React, { FC } from 'react';
import { css } from '@emotion/core';
import Choice from './choice';
import { ChoiceType } from 'root/src/types/quiz';
import QuestionDisplay from './questionDisplay';

type Props = {
  choiceEvent: any;
  choices: ChoiceType[];
  question: string;
  questionImage?: string;
  round: number;
};

const Question: FC<Props> = ({ question, questionImage, choices, round, choiceEvent }) =>
  (
    <React.Fragment>
      <div css={styles.question}>
        <QuestionDisplay question={question} questionImage={questionImage} />
      </div>
      <div css={styles.choiceWrapper}>
        {choices.map((item, idx) => (
          <Choice
            round={round}
            choiceData={item}
            onClick={() => choiceEvent(idx)}
            key={idx}
          />
        ))}
      </div>

    </React.Fragment>
  );

export default Question;

const styles = {
  question: css`
  `,
  choiceWrapper: css`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap:30px;
  `
};
