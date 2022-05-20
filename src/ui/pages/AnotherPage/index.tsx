import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const AnotherPage = () => {
  return (
    <Container className="d-flex flex-column flex-grow-1">
      <Helmet>
        <title>React typescript - Une autre page</title>
      </Helmet>
      <h1 className="py-3">Une autre page</h1>
      <p>
        L'objectif de cette page est de démontrer l'intérêt de l'usage du
        Suspense.
      </p>
      <p>
        Pour vérifier : Regarder le load du chunk correspondant dans les traces
        réseau.
      </p>
    </Container>
  );
};

export default AnotherPage;
