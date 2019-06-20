import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  // This method replaces the 'componentDidMount' and the 'componentDidUpdate'
  // lifecycle methods. Its mechanism also prevents the infinite loop of
  // 'componentDidUpdate'
  useEffect(
    () => {

      // You can isolate this one or use this nasty syntax :) (you'll find)
      // a lot of useEffects with that syntax
      (async () => {
        const url = `${process.env.REACT_APP_BASE_API_URL}/${resource}`;

        const resources = await axios.get(url);
        await setResources(resources.data);
      })()
    },
    // This array kind of "monitors" this property. If it changes, our
    // arrow function is called.
    // Obs 1: Objects might trigger the arrow function because it can be another 
    // reference, even if the old obj and the new has the same keys and values.

    // Obs 2: Always pass this array, if you don't pass (even when empty) it will
    // work as componentDidUpdate and you might end in a infinite loop

    // Obs 3: In arrays, it will compare th length and each value from the array, 
    // so if you pass the same array twice (different references) it won't trigger 
    // the arrow func.
    [resource],
  )

  return (
    <div>
      {
        resources.length === 0 ?
          <span>There's nothing to be shown.</span> :
          resources.map((r) => <p key={r.id}>{r.title}</p>)
      }
    </div>
  );
}

export default ResourceList;
