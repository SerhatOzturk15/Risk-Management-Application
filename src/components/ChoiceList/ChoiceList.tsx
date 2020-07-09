import React from 'react';
import Form from 'react-bootstrap/Form'

type ChoiceListProps = {
    choices: Array<Object>,
    handleChange: any,
    selected: number
}

const ChoiceList = ({ choices, handleChange, selected }: ChoiceListProps) => {

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicCheckbox">
                    {choices.map((choice, index) => {
                        return <Form.Check
                            key={index}
                            type="checkbox"
                            onChange={(e) => handleChange(e)}
                            aria-label="radio button"
                            value={index}
                            checked={index === selected}
                            label={choice}
                            data-test="choice"
                            inline
                        />
                    })}
                </Form.Group>
            </Form>
        </>
    )
}

export default ChoiceList;