import {
  FormControl,
  FormLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import { useState } from "react";

export const SscSelect = ({
  value = "",
  defaultValue = "",
  className,
  onChange,
  disabled,
  placeholder,
  //   maxHeight,
  options = [],
  labelKey,
  valueKey,
  onOpen,
  onClose,
  //   dropUp,
  label,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    if (value && value !== "" && typeof onChange === "function") {
      onChange();
      setSelectedValue(value);
    }
    setSelectedValue(e.target.value);
  };

  const onMenuOpen = () => {
    setIsOpen(true);
    if (typeof onOpen === "function") {
      onOpen();
    }
  };

  const onMenuClose = () => {
    setIsOpen(false);
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const optionsMapper = (key = "label") => {
    return options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option[key]}
      </MenuItem>
    ));
  };

  const renderMenuItem = () => {
    if (labelKey) return optionsMapper(labelKey);

    if (valueKey) return optionsMapper(valueKey);

    return optionsMapper();
  };

  const SelectIconComponent = () => {
    return isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;
  };

  return (
    <div>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <MuiSelect
          value={selectedValue}
          defaultValue={defaultValue}
          onChange={handleChange}
          onOpen={onMenuOpen}
          onClose={onMenuClose}
          className={className}
          disabled={disabled}
          placeholder={placeholder}
          IconComponent={SelectIconComponent}
        >
          {renderMenuItem()}
        </MuiSelect>
      </FormControl>
    </div>
  );
};

SscSelect.defaultProps = {
  maxHeight: 200,
  disabled: false,
  dropUp: false,
  label: "",
  onChange: () => {},
  onOpen: () => {},
  onClose: () => {},
};

SscSelect.propTypes = {
  className: PropTypes.string,
  maxHeight: PropTypes.number,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  dropUp: PropTypes.bool,
  options: PropTypes.array,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};
