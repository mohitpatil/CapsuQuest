import { FC, useState } from "react";
import StyledButton from "../StyledButton";
import { SaltSuggestions } from "../../types/salt.types";
import { getButtonType } from "../../utils/getButtonType";

interface PackingSelectionProps {
  packings: string[];
  selectedPacking: string;
  onSelectPacking: (packing: string) => void;
  options: SaltSuggestions["salt_forms_json"];
  selectedForm: string;
  selectedStrength: string;
}

const PackingSelection: FC<PackingSelectionProps> = ({
  packings,
  selectedPacking,
  onSelectPacking,
  options,
  selectedForm,
  selectedStrength,
}) => {
  const [showAllPackings, setShowAllPackings] = useState(false);

  return (
    <div className="w-full flex gap-[5px]">
      <div className="w-[25%] tracking-wide font-[400]">Packings:</div>
      <div className="w-[75%] flex flex-wrap gap-[20px]">
        {(showAllPackings ? packings : packings.slice(0, 3)).map(
          (packing: string) => {
            const packingOptions = options[selectedForm][selectedStrength][packing];
            const isAvailable = !Object.values(packingOptions).every(option => option === null);
            const type = getButtonType(packing === selectedPacking, isAvailable);

            return (
              <StyledButton
                key={packing}
                text={packing}
                type={type}
                onClick={() => onSelectPacking(packing)}
              />
            );
          }
        )}
        {packings.length > 3 && (
          <button
            className="text-[#477dba] font-semibold"
            onClick={() => setShowAllPackings(!showAllPackings)}
          >
            {showAllPackings ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PackingSelection;
