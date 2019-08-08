import React, { Suspense } from "react";
import ActivitiesList from "./components/activities/ActivitiesList";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
        <header className="App-header">
          <h1>Activities</h1>
        </header>
        <ActivitiesList />
      </div>
    </Suspense>
  );
}

export default App;
