import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const TenureSelect = ({ data, setData }) => {
  const handleOnChange = (e) => {
    setData({ ...data, loanTerm: e.target.value });
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="tenure">Tenure</InputLabel>
      <Select
        labelId="tenure"
        id="tenure-years"
        label="Tenure"
        defaultValue={5}
        onChange={handleOnChange}
      >
        <MenuItem value={5}>5 Years</MenuItem>
        <MenuItem value={10}>10 Years</MenuItem>
        <MenuItem value={15}>15 Years</MenuItem>
        <MenuItem value={20}>20 Years</MenuItem>
        <MenuItem value={25}>25 Years</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TenureSelect;
