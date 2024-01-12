import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [rules, setRules] = useState([]);
  const [key, setKey] = useState('age');
  const [value, setValue] = useState(0);
  const [score, setScore] = useState(0);
  const [operator, setOperator] = useState('>');
  const [combinator, setCombinator] = useState('And');

  const addExpression = () => {
    setRules([...rules, { key, output: { value, operator, score } }]);
    setKey('age');
    setValue(0);
    setScore(0);
    setOperator('');
    setCombinator('And');
  };

  const deleteExpression = (index: number) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {rules.map((rule, index) => (
            <div key={index} className="mb-3">
              <select
                className="form-select bg-light text-dark"
                onChange={(e) => setKey(e.target.value)}
              >
                <option value="age">Age</option>
                <option value="credit_score">Credit Score</option>
                <option value="account_balance">Account Balance</option>
              </select>
              <select
                className="form-select bg-light text-dark"
                onChange={(e) => setOperator(e.target.value)}
              >
                <option value=">">{">"}</option>
                <option value="<">{"<"}</option>
                <option value=">=">{">="}</option>
                <option value="<=">{"<="}</option>
                <option value="=">{"="}</option>
              </select>
              <input
                className="form-control bg-light text-dark"
                onChange={(e) => setValue(+e.target.value)}
                type="number"
              />
              <input
                className="form-control bg-light text-dark"
                onChange={(e) => setScore(+e.target.value)}
                type="number"
              />
              <button
                className="btn btn-danger"
                onClick={() => deleteExpression(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <button className="btn btn-primary bg-light text-dark" onClick={addExpression}>
            Add Expression
          </button>
        </div>
        <div className="col-md-6">
          <select
            className="form-select bg-light text-dark"
            onChange={(e) => setCombinator(e.target.value)}
          >
            <option value="and">AND</option>
            <option value="or">OR</option>
          </select>
          <div className="mt-3">
            <pre>{JSON.stringify({ rules, combinator }, '_', 2)}</pre>
          </div>
        </div>
      </div>
      </div>
  );
}
