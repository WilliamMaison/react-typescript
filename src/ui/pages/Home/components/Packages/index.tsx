import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveAllPackagesAction } from "../../../../../corelogic/usecases/package/packageRetrievalSlice";
import { AppState } from "../../../../../redux/AppState";
import { PackageCard } from "../PackageCard";
import { ErrorMessage } from "../../../../components/ErrorMessage";
import { Spinner } from "react-bootstrap";
import { SearchInput } from "../SearchInput";
import { NoContent } from "../../../../components/NoContent";

export const Packages = () => {
  const dispatch = useDispatch();
  const { packages, fetching, error } = useSelector(
    (state: AppState) => state.packageRetrieval
  );
  const [criteria, setCriteria] = useState("");

  useEffect(() => {
    if (criteria) {
      dispatch(retrieveAllPackagesAction({ criteria }));
    }
  }, [dispatch, criteria]);

  return (
    <section className="d-flex flex-column flex-grow-1">
      <h2>Rechercher des packages</h2>
      <SearchInput onChange={setCriteria} />
      {!fetching &&
        packages &&
        packages.map((npmPackage, index) => (
          <PackageCard key={`package-${index}`} npmPackage={npmPackage} />
        ))}
      {!fetching && packages && packages.length === 0 && (
        <NoContent message="Aucun résultat correspondant à votre recherche." />
      )}
      {error && <ErrorMessage error={error} />}
      {fetching && (
        <div className="d-flex flex-column flex-grow-1 align-items-center justify-content-center">
          <Spinner animation="border" />
        </div>
      )}
    </section>
  );
};
