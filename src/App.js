import React from 'react';

import PageRoutes from "./pages/PageRoutes";
import GlobalHeader from "./components/GlobalHeader/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter/GlobalFooter";


function App() {
  return (
    <div>
        <GlobalHeader />
        <PageRoutes />
        <GlobalFooter />
    </div>
  );
}

export default App;
