import {useState, useEffect} from 'react';

export const useFreshState = propState => {
  const [state, setState] = useState(propState);
  useEffect(() => {
    setState(propState);
  }, [propState]);
  return [state, setState];
};

export const useArray = propArray => {
  const [array, setArray] = useFreshState(propArray);
  const removeElem = i => setArray(array => array.filter((_, j) => j !== i));
  const updateElem = (updated, i) => setArray(array => array.map((old, j) => {
    if (i !== j) return old;
    if (typeof updated === 'function') return updated(old);
    return updated;
  }))

  const elements = array.map((elem, i) => [
    elem,
    updated => updateElem(updated, i),
    () => removeElem(i)
  ]);
  return [elements, setArray];
};