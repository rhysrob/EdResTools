import React, { FC } from 'react';
type Props = {
  isCorrect: boolean;
};
const FeedbackIcon: FC<Props> = ({
  isCorrect
}) =>
  (
    <td>
      <p>Hello World.</p>
      <span>{isCorrect ? '✔' : '❌'}</span>
    </td>
  );
export default FeedbackIcon;
