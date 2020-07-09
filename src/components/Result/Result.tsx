import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

type ResultProps = {
    title: string,
    description: string,
    handleTakeTest: any,
    buttonText: string
}

const Result = ({ title, description, handleTakeTest, buttonText }: ResultProps) => {

    return (
        <Card data-test="result">
            <Card.Body>
                <Card.Title data-test="resultTitle">{title}</Card.Title>
                <Card.Text data-test="resultDescription">
                    {description}
                </Card.Text>
                <Button
                    variant="primary"
                    aria-label="take test"
                    data-test="button"
                    onClick={handleTakeTest}>
                    {buttonText}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Result;