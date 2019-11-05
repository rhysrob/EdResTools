import React, { FC, Suspense } from 'react';
import { css } from '@emotion/core';
import { CircularProgress } from 'wjec-one';
type Props = {
  question?: string;
  questionImage?: string;
};

const QuestionDisplay: FC<Props> = ({ question, questionImage }) => {
  const questionTextWrapper = () => (
    <div css={styles.questionText}>
      <h1>{question}</h1>
    </div>
  );

  const questionImageWrapper = () => (
    <div css={styles.questionImage}>
      <Suspense fallback={<CircularProgress />}>
        <img src={questionImage} width="auto" height="100%" />
      </Suspense>
    </div>
  );

  return (
    <div css={styles.questionWrapper}>
      <div css={styles.questionInner}>
        {question && questionTextWrapper()}
        {questionImage && questionImageWrapper()}
      </div>
    </div >
  );
};
export default QuestionDisplay;
const styles = {
  questionImage: css` 
    align-items:center;
    display:flex;
    height:400px; 
    width:100%;
    justify-content:center;
    justify-self:center;`,
  questionInner: css`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:30px;`,
  questionText: css`
    text-align:left;`,
  questionWrapper: css`
    `
};
