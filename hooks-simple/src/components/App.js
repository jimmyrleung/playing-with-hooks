import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  // useState returns an array with the state property and
  // the setState function for that property. 
  // You'll see that destructuring syntax with array very often
  // when using hooks.
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        {/* You can notice that now we treat our state separately, in very small pieces */}
        {/* instead of having a state object containing everything */}
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>ToDos</button>
      </div>

      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
