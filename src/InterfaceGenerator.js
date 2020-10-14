import React, { useReducer, useState } from 'react';

let count = 0;
const counter = () => {
  count = count + 1;
  return count;
}

const initialState = [{id: counter(), name: '', type: 'string'}];

export const parseComponent = (hbs) => {
  // remove the tail
  let result = hbs.split('/>')[0].split('>')[0];

  // simplify the values
  result = result.replace(/{{.*}}/gm, '____');

  // remove the start
  result = result.split(/[ \n]+/).slice(1).filter(s => s);

  // remove
  result = result.map(arg => {
    if (!arg.startsWith('@')) {
      return null;
    }

    return arg.substring(1);
  }).filter(s => s);

  const processType = (arg) => {
    const name = arg.split('=')[0];
    const value = arg.split('=')[1];

    if (name.startsWith('on')) {
      return 'function';
    }

    if (value.startsWith('"')) {
      return 'string';
    }

    return 'string';
  };

  result = result.map((arg, id) => {
    return {
      id,
      name: arg.split('=')[0],
      type: processType(arg),
    }
  })

  return result
}

const reducer = (state, action) => {

  switch (action.type) {
    case 'add':
      return [...state, {id: counter(), name: '', type: 'string'}];
    case 'remove':
      return state.filter(property => property.id !== action.payload.property.id)
    case 'updateName':
      const newState = state.map(property => {
        if (property.id === action.payload.property.id) {
          return { ...property, name: action.payload.value }
        }
        return property;
      });
      if (newState[newState.length - 1].name) {
        return [...newState, {id: counter(), name: '', type: 'string'}]
      }
      return newState;
    case 'updateType':
      return state.map(property => {
        if (property.id === action.payload.property.id) {
          return { ...property, type: action.payload.value }
        }
        return property;
      });
    case 'import':
      return parseComponent(action.payload);
    default:
      throw new Error('Not existing state');
  }
}

const types = ['number', 'string', 'boolean', 'enum', 'void', 'null', 'undefined', 'any', 'never', 'Array', 'function']

// Handle state
export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [importValue, setImport] = useState('');

  return (
    <div>
      <h2>Import</h2>
      <textarea
        value={importValue}
        onChange={(event) => {
            const value = event.target.value;
            setImport(value);
            dispatch({type: 'import', payload: value});
        }}
      ></textarea>
      <h2>Define</h2>
      <button onClick={() => dispatch({type: 'add'})} type="button">Add</button>
      <ul>
        {state.map((property) => (
          <li key={property.id}>
            <label>
              Name
              <input name="property-name" type="text" value={property.name} onChange={event => dispatch({type: 'updateName', payload: { property, value: event.target.value}})}/>
              <select name="type" value={property.type} onChange={event => dispatch({ type: 'updateType', payload: { property, value: event.target.value }})}>
              {types.map((type, typeIndex) => (
                <option key={typeIndex} value={type}>{type}</option>
              ))}
              </select>
            </label>
            <button onClick={() => dispatch({type: 'remove', payload: { property }})} type="button">x</button>
          </li>
        ))}
      </ul>

      <h2>Output</h2>
      <code>
        interface Args {"{"}
            {state.filter(property => property.name).map(property => <p key={property.id}>{property.name}: {property.type};</p>)}
        {"}"}
      </code>
    </div>
  );
}