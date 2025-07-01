const { useState } = React;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [showEditor, setShowEditor] = useState(true);
  const [showPreview, setShowPreview] = useState(true);

  return (
    <div className="app">
      {/* Control buttons to reopen panels */}
      <div className="panel-toggles">
        {!showEditor && (
          <button className="toggle-btn" onClick={() => setShowEditor(true)}>
            Show Editor
          </button>
        )}
        {!showPreview && (
          <button className="toggle-btn" onClick={() => setShowPreview(true)}>
            Show Preview
          </button>
        )}
      </div>

      {showEditor && (
        <Editor
          markdown={markdown}
          setMarkdown={setMarkdown}
          onClose={() => setShowEditor(false)}
        />
      )}

      {showPreview && (
        <Preview markdown={markdown} onClose={() => setShowPreview(false)} />
      )}
    </div>
  );
}
