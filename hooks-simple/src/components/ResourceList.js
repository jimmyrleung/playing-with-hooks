import React from 'react';
import { useResources } from '../hooks';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

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
