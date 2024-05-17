export const getButtonType = (isSelected: boolean, isAvailable: boolean) => {
  if (isSelected) {
    return isAvailable ? "selected" : "dashedSelected";
  } else {
    return isAvailable ? "primary" : "dashed";
  }
};
