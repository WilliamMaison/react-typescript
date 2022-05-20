import { FormControl, InputGroup } from "react-bootstrap";
import useDebounce from "../../../../hooks/useDebounce";
import { useEffect } from "react";

interface Props {
  onChange: (value: string) => void;
}

export const SearchInput = ({ onChange }: Props) => {
  const [value, setValue] = useDebounce(300, "");
  useEffect(() => {
    onChange(value);
  }, [onChange, value]);
  return (
    <InputGroup className="my-3">
      <InputGroup.Text id="search">
        <i className="bi bi-search" />
      </InputGroup.Text>
      <FormControl
        onChange={(event) => setValue(event.target.value)}
        placeholder="Saisir un texte"
        aria-label="criteria"
        aria-describedby="search"
      />
    </InputGroup>
  );
};
