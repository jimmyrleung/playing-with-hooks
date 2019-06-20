import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async () => {
    const url = `${process.env.REACT_APP_BASE_API_URL}/${resource}`;

    const resources = await axios.get(url);
    await setResources(resources.data);
  }

  // This method replaces the 'componentDidMount' and the 'componentDidUpdate'
  // lifecycle methods. Its mechanism also prevents the infinite loop of
  // 'componentDidUpdate'
  useEffect(
    () => {
      fetchResources();
    },
    // This array kind of "monitors" this property. If it changes, our
    // arrow function is called.
    [resource]
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
