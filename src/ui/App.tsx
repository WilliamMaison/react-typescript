import { lazy, Suspense } from "react";
import { Container, Spinner } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";

const Home = lazy(() => import("./pages/Home"));
const AnotherPage = lazy(() => import("./pages/AnotherPage"));

export default function App() {
  return (
    <HelmetProvider>
      <Container className="bg-white vh-100">
        <Suspense
          fallback={
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
              <Spinner animation="border" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/another-page" element={<AnotherPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </HelmetProvider>
  );
}
