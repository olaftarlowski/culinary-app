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
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/kontakt" element={<Api />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
        <Footer />
      </AppContentWrapper>
    </Router>
  );
};

export default App;
