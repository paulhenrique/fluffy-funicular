import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const RegisteredKeys = () => {
  const { keys } = useSelector((state: RootState) => state.keys);

  return <pre>{JSON.stringify(keys, null, 4)}</pre>;
};
