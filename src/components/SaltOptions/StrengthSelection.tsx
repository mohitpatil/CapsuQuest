import { FC, useState } from "react";
import StyledButton from "../StyledButton";

interface StrengthSelectionProps {
  strengths: string[];
  onSelectStrength: (strength: string) => void;
}

const StrengthSelection: FC<StrengthSelectionProps> = ({
  strengths,
  onSelectStrength,
}) => {
  const [showAllStrengths, setShowAllStrengths] = useState(false);
  return (
    <div className="w-full flex gap-[5px]">
      <div className="w-[25%] tracking-wide font-[400]">Strengths:</div>
      <div className="w-[75%] flex flex-wrap gap-[20px]">
        {(showAllStrengths ? strengths : strengths.slice(0, 3)).map(
          (strength: string) => {
            return (
              <StyledButton
                key={strength}
                text={strength}
                type="dashed"
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
