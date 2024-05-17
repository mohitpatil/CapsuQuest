import { FC, useState } from "react";
import StyledButton from "../StyledButton";

interface FormSelectionProps {
  forms: string[];
  selectedForm: string;
  onSelectForm: (form: string) => void;
}

const FormSelection: FC<FormSelectionProps> = ({
  forms,
  selectedForm,
  onSelectForm,
}) => {
  const [showAllForms, setShowAllForms] = useState(false);
  return (
    <div className="w-full flex gap-[5px]">
      <div className="w-[25%] tracking-wide font-[400]">Forms:</div>
      <div className="w-[75%] flex flex-wrap gap-[20px]">
        {(showAllForms ? forms : forms.slice(0, 3)).map((form: string) => (
          <StyledButton
            key={form}
            text={form}
            type={form === selectedForm ? "selected" : "primary"}
            onClick={() => {
              onSelectForm(form);
            }}
          />
        ))}

        {forms.length > 3 && (
          <button
            className="text-[#477dba] font-semibold"
            onClick={() => setShowAllForms(!showAllForms)}
          >
            {showAllForms ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormSelection;
