function Editor({ markdown, setMarkdown, onClose }) {
  return (
    <div className="editor-wrap panel">
      <div className="panel-header">
        <h2>Editor</h2>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
      <textarea
        id="editor"
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
      />
    </div>
  );
}
