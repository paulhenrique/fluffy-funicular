import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { routesPath } from "../../router/ROUTES";
import { addKey } from "../../store/features/keysReducer";
import { Link } from "react-router-dom";
import { RegisteredKeys } from "../../components/RegisteredKeys";

// renderiza formulário de cadastro para as keys na store
export const KeysRegister = () => {
  const [key, setKey] = React.useState<string>("");
  const [value, setValue] = React.useState<string>("");

  const dispatch = useDispatch();

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addKey({
        key,
        value,
      })
    );
    handleClear();
  };

  // função que limpa o formulário
  const handleClear = () => {
    setKey("");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField
          required
          fullWidth
          onChange={handleKeyChange}
          value={key}
          label="Key"
        />
        <TextField
          required
          fullWidth
          onChange={handleValueChange}
          value={value}
          label="Value"
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
        <Button onClick={handleClear}>Clear</Button>
        <Link to={routesPath.home}>Go to Translate</Link>
        <RegisteredKeys />
      </Box>
    </form>
  );
};
