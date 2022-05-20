import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Packages } from "./components/Packages";

const Home = () => {
  return (
    <Container className="d-flex flex-column flex-grow-1">
      <Helmet>
        <title>React typescript - Accueil</title>
      </Helmet>
      <h1 className="py-3">Accueil</h1>
      <Packages />
    </Container>
  );
};

export default Home;
