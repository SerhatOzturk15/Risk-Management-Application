import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'

type ResultProps = {
  title: string,
  description: string,
  buttonText: string,
}

const Start = ({ title, description, buttonText }: ResultProps) => {

  return (
    <Card data-test="start">
      <Card.Body>
        <Card.Title data-test="startTitle">{title}</Card.Title>
        <Card.Text data-test="startDescription">
          {description}
        </Card.Text>
        <Link to={`/question/${1}`}>
          <Button data-test="buttonText">{buttonText}</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Start;