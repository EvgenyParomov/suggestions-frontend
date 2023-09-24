import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export function UiSelectField<
  IdKey extends string,
  LabelKey extends string,
  Option extends Record<IdKey, number | string | undefined> & Record<LabelKey, string>
>({
  idKey,
  label,
  labelKey,
  onChange,
  options,
  value,
}: {
  label: string;
  idKey: IdKey;
  labelKey: LabelKey;
  value: Option[IdKey];
  onChange: (value: Option[IdKey]) => void;
  options: Option[];
}) {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value as Option[IdKey])}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option[idKey]} value={option[idKey]}>
            {option[labelKey]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
