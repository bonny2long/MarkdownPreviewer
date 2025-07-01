function Preview({ markdown, onClose }) {
  marked.setOptions({ breaks: true });

  return (
    <div className="preview-wrap panel">
      <div className="panel-header">
        <h2>Preview</h2>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      />
    </div>
  );
}
