import { Alert } from "react-bootstrap";
interface Props {
  error: Error;
}

export const ErrorMessage = ({ error }: Props) => {
  return <Alert variant="danger">{error.message}</Alert>;
};
