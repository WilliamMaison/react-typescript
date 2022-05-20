interface Props {
  message: string;
}

export const NoContent = ({ message }: Props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 text-black-50">
      <i className="bi bi-inbox" style={{ fontSize: "5rem" }} />
      <h4>{message}</h4>
    </div>
  );
};
