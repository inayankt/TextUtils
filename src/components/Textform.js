import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const convertUpperCase = () => {
    setOutput(input.trim().toUpperCase());
  };

  const convertLowerCase = () => {
    setOutput(input.trim().toLowerCase());
  };

  const removeExtraSpaces = () => {
    setOutput(input.trim().split(/[ ]+/).join(' '));
  };

  const capitalizeText = () => {
    let wordsList = input.split(/[ ]+/);
    let finalWords = [];
    for(let w of wordsList){
      let word = w[0].toUpperCase() + w.slice(1).toLowerCase();
      finalWords.push(word);
    }
    setOutput(finalWords.join(' '));
  }

  const handleOnChangeInput = () => {
    const InpArea = document.getElementById('input-text');
    setInput(InpArea.value);
  };

  const findAndReplace = () => {
    const findText = document.getElementById('findText');
    const replaceText = document.getElementById('replaceText');
    if(findText.value && replaceText.value){
      setOutput(input.replaceAll(findText.value, replaceText.value));
    };
  };

  const handleOnChangeOutput = () => {};

  const clearOutput = () => {
    setOutput('');
  };

  const clearInput = () => {
    setInput('');
  };

  const copyRes = () => {
    const out = document.getElementById('output-text');
    out.select();
    document.execCommand('copy');
    // navigator.clipboard.writeText(out.value);
    document.getElementById('copy-alert').classList.remove('hidden-alert');
    setTimeout(() => {
      document.getElementById('copy-alert').classList.add('hidden-alert');
    }, 2000);
  };

  return (
    <>
    <div className="d-flex gap-4 textform-main-div-1">
      <div className="textform-sub-div-1 mt-4 mb-0">
        <p className="display-6 mb-2">Enter the text to analyse below</p>
        <div className="mb-3">
          <label htmlFor="input-text" className="form-label">Your text:</label>
          <button className={`btn btn-sm btn-outline-${(props.mode === 'light') ? 'dark' : 'light'} mb-2 float-end`} onClick={clearInput}>clear</button>
          <textarea className="form-control" id="input-text" rows={props.rows} placeholder={props.phInput} value={input} onChange={handleOnChangeInput} autoFocus></textarea>
        </div>
        <div className="mb-3">
          <div className="">
            <label htmlFor="output-text" className="form-label">Edited text:</label>
            <div className="d-flex gap-2 float-end">
              <button className={`btn btn-sm btn-outline-${(props.mode === 'light') ? 'dark' : 'light'} mb-2`} onClick={copyRes}>copy</button>
              <button className={`btn btn-sm btn-outline-${(props.mode === 'light') ? 'dark' : 'light'} mb-2`} onClick={clearOutput}>clear</button>
            </div>
          </div>
          <textarea className="form-control" id="output-text" rows={props.rows} placeholder={props.phOutput} value={output} onChange={handleOnChangeOutput}></textarea>
        </div>
        <div className="d-flex gap-4">
          <span>Text formatting: </span>
          <div className="d-flex res-custom mb-0 gap-3">
            <button className={`btn btn-${(props.mode === 'light') ? 'primary' : 'warning'}`} onClick={convertUpperCase}>Convert to Uppercase</button>
            <button className={`btn btn-${(props.mode === 'light') ? 'primary' : 'warning'}`} onClick={convertLowerCase}>Convert to Lowercase</button>
            <button className={`btn btn-${(props.mode === 'light') ? 'primary' : 'warning'}`} onClick={capitalizeText}>Capitalize</button>
            <button className={`btn btn-${(props.mode === 'light') ? 'primary' : 'warning'}`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
          </div>
        </div>
        <div className="mt-3 d-flex gap-3" id="findReplaceForm">
          <span>Find and replace: </span>
          <div className="d-flex res-custom mb-0 gap-3">
            <input type="text" id="findText" className="form-control custom-input" placeholder="Find" autoComplete="off" />
            <input type="text" id="replaceText" className="form-control custom-input" placeholder="Replace" autoComplete="off" />
            <button onClick={findAndReplace} className={`btn btn-${(props.mode === 'light') ? 'primary' : 'warning'}`}>Find and Replace</button>
          </div>
        </div>
      </div>
      <hr style={{margin: '0 0 -30px 0'}} />
      <div className="textform-sub-div-2 mt-4">
        <p className="display-6 mt-0 mb-2">Text summary</p>
        <div>Your entered text containes:</div>
        <div>{input.length} characters and {input.split(/[ ]+/).filter((w) => { return (w !== "") }).length} words</div>
        <div>Time to read: {0.008 * input.split(/[ ]+/).filter((w) => { return (w !== "") }).length} minutes</div>
      </div>
    </div>
    <hr />
    <div className="textform-main-div-1 w-100">
      <p className="display-6 mt-3 mb-2">Output Preview</p>
      <p>{(output === '') ? "Enter your text to preview it here..." : output}</p>
    </div>
    </>
  )
}

Textform.propTypes = {
    mode: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    phInput: PropTypes.string,
    phOutput: PropTypes.string,
};

Textform.defaultProps = {
    mode: 'light',
    heading: 'Enter text',
    rows: 5,
    phInput: 'Input here...',
    phOutput: 'Output here...',
};
