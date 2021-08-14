import React from "react";

import "./App.css";

function App() {
  return (
    <div className="mb-3">
      <label htmlFor="formFile" className="form-label">
        Product Image
      </label>
      <input className="form-control" type="file" id="formFile" />
    </div>
  );
}

export default App;
