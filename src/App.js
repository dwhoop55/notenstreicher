import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import MEGGDisplay from "./MEGG";

import "./App.css";

const initialTranscript = JSON.parse(
  '{"meggs":[{"name":"PraktischeInformatik","grades":[{"name":"Programmierung","grade":2,"ects":8},{"name":"DSAL","grade":2,"ects":8},{"name":"Datenbanken","grade":2,"ects":6},{"name":"SWT","grade":2,"ects":6}]},{"name":"TechnischeInformatik","grades":[{"name":"TI","grade":2,"ects":6},{"name":"BUS","grade":2,"ects":6},{"name":"Datkom","grade":2,"ects":6}]},{"name":"TheoretischeInformatik","grades":[{"name":"Fosap","grade":2,"ects":6},{"name":"BuK","grade":2,"ects":7},{"name":"Malo","grade":4,"ects":7}]},{"name":"Mathematik","grades":[{"name":"DS","grade":2,"ects":6},{"name":"AfI","grade":2,"ects":8},{"name":"LA","grade":2,"ects":6},{"name":"Stocha","grade":2,"ects":6}]},{"name":"Sonstiges","grades":[{"name":"Proseminar","grade":2,"ects":3},{"name":"Praktikum","grade":2,"ects":6},{"name":"Seminar","grade":2,"ects":5}]},{"name":"Wahlpflicht","grades":[{"name":"DPN","grade":2,"ects":6},{"name":"AI","grade":2,"ects":6},{"name":"Compilerbau","grade":2,"ects":6}]},{"name":"Anwendungsfach","grades":[{"name":"NumA1","grade":2,"ects":6},{"name":"MathePraktikum","grade":2,"ects":6},{"name":"Cobra","grade":2,"ects":10}]}]}'
);

const App = () => {
  let [transcript, updateTranscript] = useState(initialTranscript);

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header mb-4">
          Notenstreicher
          <Button variant="primary" className="ms-3">
            Calculate
          </Button>
          <Button variant="success" className="ms-3">
            Add Grade Area
          </Button>
          <Button variant="secondary" className="ms-3">
            Reset Form
          </Button>
        </h1>
        {transcript.meggs.map((gradeArea, i) => (
          <>
            <MEGGDisplay gradeArea={gradeArea} gradeAreaKey={i} />
            <hr />
          </>
        ))}
      </Container>
    </Container>
  );
};

export default App;