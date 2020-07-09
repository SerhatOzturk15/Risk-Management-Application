import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Start } from '../components';

const TestContainer = () => {
  const history = useHistory();

  useEffect(() => {
    const currId: number = JSON.parse(localStorage.getItem("currId")!);
    if (currId) {
      if (currId <= 3) {
        history.push(`/question/${currId}`);
      } else {
        history.push(`/result`);
      }
    }
  }, []);

  return (
    <Start
      title='Risk Analysis Test'
      description='This is a test to asses your risk level'
      buttonText='Take the test' />
  )
}

export default TestContainer;