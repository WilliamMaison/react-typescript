import { Card } from "react-bootstrap";
import { Package } from "../../../../../corelogic/domain/package";

interface Props {
  npmPackage: Package;
}

export const PackageCard = ({ npmPackage }: Props) => {
  return (
    <Card className="p-2 mt-2">
      <Card.Body className="d-flex flex-row">
        <div className="d-flex flex-column">
          <span className="text-secondary">Name</span>
          <strong>{npmPackage.name}</strong>
        </div>
      </Card.Body>
    </Card>
  );
};
