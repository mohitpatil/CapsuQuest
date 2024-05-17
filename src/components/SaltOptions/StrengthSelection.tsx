import { FC, useState } from "react";
import StyledButton from "../StyledButton";
import { SaltSuggestions } from "../../types/salt.types";
import { getButtonType } from "../../utils/getButtonType";

interface StrengthSelectionProps {
  strengths: string[];
  onSelectStrength: (strength: string) => void;
  selectedStrength: string;
  options: SaltSuggestions["salt_forms_json"];
  selectedForm: string;
  selectedPacking: string;
}

const StrengthSelection: FC<StrengthSelectionProps> = ({
  strengths,
  onSelectStrength,
  selectedStrength,
  options,
  selectedForm,
}) => {
  const [showAllStrengths, setShowAllStrengths] = useState(false);
  return (
    <div className="w-full flex gap-[5px]">
      <div className="w-[25%] tracking-wide font-[400]">Strengths:</div>
      <div className="w-[75%] flex flex-wrap gap-[20px]">
        {(showAllStrengths ? strengths : strengths.slice(0, 3)).map(
          (strength: string) => {
            const currentStrength = options[selectedForm][strength];
            const isAvailable = currentStrength && Object.values(currentStrength).some(strength => strength !== null);
            const type = getButtonType(strength === selectedStrength, isAvailable);
            return (
              <StyledButton
                key={strength}
                text={strength}
                type={type}
                onClick={() => onSelectStrength(strength)}
              />
            );
          }
        )}
        {strengths.length > 3 && (
          <button
            className="text-[#477dba] font-semibold"
            onClick={() => setShowAllStrengths(!showAllStrengths)}
          >
            {showAllStrengths ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default StrengthSelection;