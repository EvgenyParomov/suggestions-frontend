import { TextField } from "@mui/material";
import { ChangeEventHandler } from "react";

export function UiTextField({
  label,
  onChange,
  value,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={handleChange}
    />
  );
}
