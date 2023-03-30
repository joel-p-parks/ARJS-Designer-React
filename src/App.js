import React from "react";
import "./App.css";
import { Designer } from "@grapecity/activereports-react";

function App() {
  const counter = React.useRef(0);
  const [reportStorage, setReportStorage] = React.useState(new Map());

  const onSave = function(info) {
    const reportId = info.id || `report${counter.current++}`;
    setReportStorage(new Map(reportStorage.set(reportId,info.definition)));
    return Promise.resolve({displayName: reportId});
  }

  const onSaveAs = function (info) {
    const reportId = info.id || `report${counter.current++}`;
    setReportStorage(new Map(reportStorage.set(reportId, info.definition)));
    return Promise.resolve({ id: reportId, displayName: reportId });
  };

  return (
    <div id="designer-host">
      <Designer report={{ id: "TestReport.rdlx-json", displayName: "my report" }} onSave={onSave} onSaveAs={onSaveAs} />
    </div>
  );
}

export default App;