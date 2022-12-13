import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { translate } from "../../services/translatorService";
import { RootState } from "../../store";
import { setText } from "../../store/features/translatorReducer";
export const Translator = () => {
  const dispatch = useDispatch();

  const localSetTextAction = (text: string) => dispatch(setText(text));
  const { text } = useSelector((state: RootState) => state.translator);
  const { keys } = useSelector((state: RootState) => state.keys);

  return (
    <>
      <TextField
        fullWidth
        multiline
        rows={4}
        placeholder="Type here something"
        label="Original Text"
        onChange={(e) => {
          localSetTextAction(e.target.value);
        }}
        value={text}
      />
      <TextField fullWidth multiline value={translate(text, keys)} rows={4} />
    </>
  );
};
