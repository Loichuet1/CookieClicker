import React, { useState } from 'react';

function ScoreManager() {
    const [score, setScore] = useState(0);

    const updateScore = (value) => {
        const newScore = score + value;
        if (newScore >= 0) {
          setScore(newScore);
        }
      };

    return { score, updateScore };
}

export default ScoreManager;