import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function HomeScreen() {
  const [dateAndTitle, setDateAndTitle] = useState('');
  const [mainTitle, setMainTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [chapters, setChapters] = useState('');
  const [transcript, setTranscript] = useState('');
  const [article, setArticle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formatDateAndTitle = (str) => {
    return str.replace('.mp3', '');
  };

  const formatNotes = (str) => {
    // Remove Guest
    str = str.slice(str.indexOf('Summary:'));
    let summary = str.slice(0, str.indexOf('Key Takeaways:'));
    let keyTakeaways = str.slice(summary.length, str.indexOf('Quotes:'));
    let quotes = str.slice(summary.length + keyTakeaways.length);
    return [summary, keyTakeaways, quotes];
  };

  return (
    <main className="editor">
      <div className="form">
        <h1 className="title">Form</h1>
        <Form>
          <Form.Group className="formContainer" controlId="dateAndTitle">
            <Form.Label>Date and Title </Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              className="textarea"
              placeholder="Paste Date and Title"
              value={dateAndTitle}
              onChange={(e) => setDateAndTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formContainer" controlId="mainTitle">
            <Form.Label>Main Title</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              className="textarea"
              placeholder="Paste Date and Title"
              value={mainTitle}
              onChange={(e) => setMainTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formContainer" controlId="note">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              className="textarea"
              placeholder="Paste Notes"
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="formContainer" controlId="chapters">
            <Form.Label>Chapters</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              className="textarea"
              placeholder="Paste Chapters"
              value={chapters}
              onChange={(e) => setChapters(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formContainer" controlId="transcript">
            <Form.Label>Transcript</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              className="textarea"
              placeholder="Paste Transcript"
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formContainer" controlId="article">
            <Form.Label>Article</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              className="textarea"
              placeholder="Paste Article"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Form>
      </div>

      <div className="resultContainer">
        <h1 className="title">Result</h1>
        <section className="resultChild">
          <h2 className="strong center">{formatDateAndTitle(dateAndTitle)}</h2>
          <h2 className="strong center">{mainTitle}</h2>
          <br />
          <section classname="notes">
            <p className="normalText">
              <span className="bold">Summary:</span>
              {formatNotes(notes)[0].slice(8)}
            </p>
            <br />
            <p className="normalText">
              <span className="bold">Key Takeaways:</span>
              {formatNotes(notes)[1].slice(14)}
            </p>
            <br />
            <p className="normalText">
              <span className="bold">Quotes:</span>
              {formatNotes(notes)[2].slice(7)}
            </p>
          </section>
          <section className="chapters">{chapters}</section>
        </section>
      </div>
    </main>
  );
}
