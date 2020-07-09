import React, { useState, useEffect } from 'react';
import { BASEURL } from "../util";
import {Result} from '../components';
import { useHistory } from "react-router-dom";

const ResultContainer = () => {
    const history = useHistory();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleTakeTest = (): void => {
        fetch(`${BASEURL}/removeAnswers`)
            .then((res) => res.json())
            .then(() => {
                localStorage.removeItem("currId");
                history.push(`/`);
            });
    }

    useEffect(() => {
        fetch(`${BASEURL}/getResult`)
            .then((res) => res.json())
            .then((result) => {
                localStorage.setItem("resultTitle", JSON.stringify('title'));
                localStorage.setItem("resultDescription", JSON.stringify('description'));
                setTitle(result.riskTitle);
                setDescription(result.riskDetail);
            })
    }, []);


    return (
        <Result title={title} description={description} handleTakeTest={handleTakeTest} buttonText = 'Would you like to start from beginning' />
    )
}

export default ResultContainer;