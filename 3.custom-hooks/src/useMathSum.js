import { useState, useEffect } from 'react';

const useMathSum = (a = 0, b = 0) => {
  const [sum, setSum] = useState(0);
  const [esPar, setEsPar] = useState(false);

  useEffect(() => {
    setSum(a + b);
    setEsPar((a + b) % 2 === 0);
  }, [a, b]);

  return {
    sum,
    esPar,
  };
};

export default useMathSum;
