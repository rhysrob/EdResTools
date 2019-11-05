import React, { FC, useState, useEffect } from 'react';
import { Button, LinearProgress } from 'wjec-one';
import { css } from '@emotion/core';
import Question from './question';
import Feedback from './feedback/feedback';
import { ChoiceType, QuizType } from 'root/src/types/quiz';

type Props = {
  data: QuizType[];
  showProgress?: boolean;
};

const Quiz: FC<Props> = ({ data, showProgress = false }) => {
  const [quiz, setQuiz] = useState(data);
  const [idx, setIdx] = useState(0);
  const [quizRound, setQuizRound] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    // calc score
    const calcScore = (answers: ChoiceType[]) => {
      let userCorrectAnswers = 0;
      const numberofAnswers = answers.filter((x) => x.isCorrect).length;

      answers.forEach((x) => {
        if (x.isCorrect && x.isSelected) {
          userCorrectAnswers++;
        }
      });

      if (userCorrectAnswers === numberofAnswers) {
        setScore(score + 1);
      }
    };

    calcScore(quiz[idx].choices);

    setIdx(idx + 1);
  };

  useEffect(() => {
    setShowNext(false);
  }, [idx]);

  const handleReplay = () => {
    setIdx(0);
    setScore(0);
    setQuizRound(quizRound + 1);

    const newQuiz = [...quiz];

    newQuiz.forEach((q) => {
      q.choices.forEach((choice) => {
        choice.userSelect = choice.isSelected;
        choice.isSelected = false;
      });
    });

    setQuiz(newQuiz);
  };

  const handleReset = () => {
    setIdx(0);
    setScore(0);
    setQuizRound(0);
    const newQuiz = [...quiz];

    newQuiz.forEach((q) => {
      q.choices.forEach((choice) => {
        choice.isSelected = false;
        choice.userSelect = false;
      });
    });
    setQuiz(newQuiz);
  };

  const handleChoice = (choiceIdx: number) => {
    const newQuiz = [...quiz];

    quiz[idx].choices[choiceIdx].isSelected === true
      ? (quiz[idx].choices[choiceIdx].isSelected = false)
      : (quiz[idx].choices[choiceIdx].isSelected = true);
    setQuiz(newQuiz);
  };

  useEffect(() => {
    const maxAnswers = quiz[idx].choices.filter((x) => x.isCorrect).length;
    const maxSelect = quiz[idx].choices.filter((x) => x.isSelected).length;

    if (maxAnswers === maxSelect) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }
  }, [quiz]);

  return (
    <div css={styles.quizWrapper}>
      {idx < quiz.length ? (
        <React.Fragment>
          {showProgress && <LinearProgress progress={idx / quiz.length * 100} />}
          <Question
            questionImage={quiz[idx].questionImage}
            question={quiz[idx].question}
            choices={quiz[idx].choices}
            round={quizRound}
            choiceEvent={handleChoice}
          />
          {showNext ? (
            <Button label="Next question" onClick={handleNextQuestion} />
          ) : null}
        </React.Fragment>
      ) :
        (<Feedback data={quiz} round={quizRound} reset={handleReset} replay={handleReplay} score={score} />
        )}
    </div>
  );
};

export default Quiz;

const styles = {
  quizWrapper: css`
    padding:30px;
    display:grid;
    grid-row-gap:20px;
    grid-column-gap:30px;
  `
};
