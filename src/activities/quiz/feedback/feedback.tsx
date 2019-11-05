import React, { FC } from 'react';
import { Button } from 'wjec-one';
import ScoreFeedback from './scoreFeedback';
import TableFeedback from './tableFeedback';
import { QuizType } from 'root/src/types/quiz';

type Props = {
  data: QuizType[];
  round: number;
  score: number;
  replay: any;
  reset: any;
};
const Feedback: FC<Props> = ({ data, round, reset, score, replay }) => {
  const showTable = (r: number) => {
    switch (r) {
      case 1:
        return <TableFeedback answers={false} data={data} />;
      case 2:
        return <TableFeedback answers={true} data={data} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ScoreFeedback score={score} max={data.length} />
      {showTable(round)}
      {round === 2 || score === data.length ? (
        <Button label='Play again' onClick={reset} />
      ) :
        (<Button label='Try again' onClick={replay} />
        )}
    </div>
  );
};

export default Feedback;
