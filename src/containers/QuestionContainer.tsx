import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import { BASEURL } from "../util";
import { ChoiceList } from '../components';

const QuestionContainer = ({ match }) => {

  const history = useHistory();
  const id: number = parseInt(match.params.id);
  const [question, setQuestion] = useState<string>('');
  const [choices, setChoices] = useState<object[]>([]);
  const [testFinished, setTestFinished] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(-1);

  useEffect(() => {
    fetch(`${BASEURL}/getAQuestion/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setTestFinished(false);
        if (result.status === "finished") {
          setTestFinished(true)
        }
        setSelected(result.item.answer);
        setQuestion(result.item.question);
        setChoices(result.item.choices);
      })
  }, []);

  const handleNext = (type: string): void => {
    if (selected < 0) {
      return;
    }
    fetch(`${BASEURL}/setAnswer/${id}/${selected}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then(() => {
        const newNumber: Number = id + 1;
        localStorage.setItem("currId", JSON.stringify(newNumber));
        if (type === 'submit') {
          history.push(`/result`);
        } else {
          history.push(`/question/${newNumber}`);
        }
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(parseInt(e.currentTarget.value));
  }

  return (
    <>
      <label>{question}</label>
      <ChoiceList choices={choices} selected={selected} handleChange={(e) => handleChange(e)}></ChoiceList>
      {testFinished ?
        <Button aria-label="submit" onClick={() => handleNext('submit')}>Submit</Button>
        :
        <Button aria-label="next" onClick={() => handleNext('')}>Next</Button>
      }
    </>

  )
}

export default QuestionContainer;