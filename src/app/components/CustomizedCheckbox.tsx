import React, { FC, ReactNode, useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

const labelStyle = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.875",
  fontWeight: 600,
};

interface CustomizedCheckboxProps {
  foods: string[];
  onCheckboxChange: (checkedItems: { [key: string]: boolean }) => void;
}

const CustomizedCheckbox: FC<CustomizedCheckboxProps> = (props) => {
  const { foods, onCheckboxChange } = props;

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (food: string) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [food]: !prevCheckedItems[food],
    }));

    // Notify the parent (ModalRefund) about the change
    onCheckboxChange({
      ...checkedItems,
      [food]: !checkedItems[food],
    });
  };

  const getCheckedValues = () => {
    return Object.keys(checkedItems).filter((food) => checkedItems[food]);
  };

  return (
    <FormGroup>
      {foods.map((food, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              style={{ color: "rgba(79, 79, 79, 1)" }}
              checked={checkedItems[food] || false}
              onChange={() => handleCheckboxChange(food)}
            />
          }
          label={<Typography sx={labelStyle}>{food}</Typography>}
        />
      ))}
    </FormGroup>
  );
};

export default CustomizedCheckbox;
