import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Api } from "./components";
import { Home, About } from "./pages";
import { Header, Main, Footer } from "./components/layout";

import { AppContentWrapper } from "./styled-components/style";

const App = () => {
  return (
    <Router>
      <AppContentWrapper>
        <h2>App component</h2>
        <Header />
        {/* <button onClick={asd}>lik</button> */}
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<Api />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
        <Footer />
      </AppContentWrapper>
    </Router>
  );
};

export default App;
