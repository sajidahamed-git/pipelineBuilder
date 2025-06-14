// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode/baseNode';
import styles from './nodes.module.css';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-value`
    }
  ];

  return (
    <BaseNode
      id={id}
      title="Input"
      handles={handles}
    >
      <label className={styles.label}>
        Name:
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Type:
        <select 
          value={inputType} 
          onChange={handleTypeChange}
          className={styles.select}
        >
          <option value="Text">Text</option>
          <option value="Filess">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
