import React, { FC } from 'react';
import { css } from '@emotion/core';
import { QuizType, ChoiceType } from 'src/types/quiz';
import FeedbackIcon from './FeedbackIcon';

type Props = {
  answers: boolean;
  data: QuizType[];
};
const TableFeedback: FC<Props> = ({ answers, data }) => {
  const myAnswers = (choices: ChoiceType[]) => {
    const x = choices.filter((item) => {
      if (item.isSelected === true) {
        return item.choiceTxt;
      }

      return false;
    });

    return x.map((item, idx) => <p key={idx}>{item.choiceTxt}</p>);
  };
  const correctAnswers = (choices: ChoiceType[]) => {
    const x = choices.filter((item) => {
      if (item.isCorrect === true) {
        return item.choiceTxt;
      }

      return false;
    });

    return x.map((item, idx) => <p key={idx}>{item.choiceTxt}</p>);
  };

  const checkAnswers = (arr: ChoiceType[]) => {
    const userAns = arr.filter((choice) => choice.isSelected === true);
    const x = !userAns.some((choice) => choice.isCorrect === false);

    return x;
  };

  return (
    <React.Fragment>
      <table css={styles.table}>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            {answers && <th>Correct Answer</th>}
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.question}</td>
              <td>{myAnswers(item.choices)}</td>
              {answers && <td>{correctAnswers(item.choices)}</td>}
              <FeedbackIcon isCorrect={checkAnswers(item.choices)} />
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default TableFeedback;

const styles = {
  table: css`
    width:100%;
    text-align:left;
  `
};
