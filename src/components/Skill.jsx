import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';

const Skill = () => {
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'Python',
    'Java',
    'C++',
    'Angular',
  ]);

  const handleDelete = (i) => {
    const newTags = tags.slice(0);
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const handleAddition = (tag) => {
    const newTags = [].concat(tags, tag);
    setTags(newTags);
    setSuggestions([...suggestions, tag]);
  };

  const handleChange = (event, { newValue }) => {
    if (!newValue) return;
    setTagInputValue(newValue);
  };

  const handleSuggestionSelected = (event, { suggestionValue }) => {
    if (tags.includes(suggestionValue)) return;
    const newTags = [].concat(tags, suggestionValue);
    setTags(newTags);
    setTagInputValue('');
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : suggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const renderInputComponent = (inputProps) => (
    <Form.Control {...inputProps} />
  );

  const [tagInputValue, setTagInputValue] = useState('');

  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h3 className="text-center mb-3">Skills</h3>
          <Form>
            <Form.Group>
              <Form.Label>Add Skills</Form.Label>
              <Autosuggest
                suggestions={getSuggestions(tagInputValue)}
                onSuggestionsFetchRequested={() => {}}
                onSuggestionsClearRequested={() => {}}
                getSuggestionValue={(suggestion) => suggestion}
                renderSuggestion={renderSuggestion}
                renderInputComponent={renderInputComponent}
                inputProps={{
                  placeholder: 'Add skills',
                  value: tagInputValue,
                  onChange: handleChange,
                  onBlur: () => {
                    if (!tags.includes(tagInputValue) && tagInputValue !== '') {
                      handleAddition(tagInputValue);
                    }
                    setTagInputValue('');
                  },
                }}
                onSuggestionSelected={handleSuggestionSelected}
              />
              <TagsInput
                value={tags}
                onChange={setTags}
                addOnBlur={false}
                addOnPaste={true}
                addKeys={[9, 13, 32, 186]}
                onlyUnique={true}
                tagProps={{
                  className: 'badge badge-primary mr-1',
                }}
                inputProps={{
                  placeholder: 'Type skills and press enter',
                }}
                handleDelete={handleDelete}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Skill;