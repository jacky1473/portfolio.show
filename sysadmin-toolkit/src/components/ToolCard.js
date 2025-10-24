import React, { useState } from 'react';
import { runAiTool } from '../api/mockApi';
import '../styles/ToolCard.css';

const ToolCard = ({ tool }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleRun = async () => {
    setIsLoading(true);
    setResponse('');
    const result = await runAiTool(tool.title);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div className="tool-card">
      <h3>{tool.title}</h3>
      <p>{tool.description}</p>
      <div className="video-placeholder">
        <p>{tool.videoPlaceholder}</p>
      </div>
      <button onClick={handleRun} disabled={isLoading}>
        {isLoading ? 'Running AI...' : 'Run AI Tool'}
      </button>
      {response && <div className="api-response">{response}</div>}
      <details>
        <summary>Behind the Scenes</summary>
        <pre><code>{tool.code}</code></pre>
      </details>
    </div>
  );
};

export default ToolCard;