import { FC, useEffect, useState } from "react";
import { SaltSuggestions } from "../../types/salt.types";
import getLowestPrice from "../../utils/getLowestPrice";
import Price from "../Price";
import FormSelection from "./FormSelection";
import StrengthSelection from "./StrengthSelection";
import PackingSelection from "./PackingSelection";

interface SaltOptionsProps {
  options: SaltSuggestions["salt_forms_json"];
  saltName: string;
}

const SaltOptions: FC<SaltOptionsProps> = ({ options, saltName }) => {
  const [selectedForm, setSelectedForm] = useState(Object.keys(options)[0]);
  const [selectedStrength, setSelectedStrength] = useState(
    Object.keys(options[selectedForm])[0]
  );
  const [selectedPacking, setSelectedPacking] = useState(
    Object.keys(options[selectedForm][selectedStrength])[0]
  );

  const [ forms ] = useState(Object.keys(options));
  const [strengths, setStrengths] = useState<string[]>([]);
  const [packings, setPackings] = useState<string[]>([]);

  useEffect(() => {
    const availableStrengths = [];
    for (const i in options[selectedForm]) {
      availableStrengths.push(i);
    }
    setStrengths(availableStrengths);

    const availablePackaging = [];
    for (const i in options[selectedForm][selectedStrength]) {
      availablePackaging.push(i);
    }
    setPackings(availablePackaging);
  }, [selectedForm, selectedStrength, selectedPacking, options]);

  useEffect(() => {
    setSelectedPacking(Object.keys(options[selectedForm][selectedStrength])[0]);
  }, [options, selectedForm, selectedStrength]);

  return (
    <>
      <div className="flex flex-col gap-5 w-1/3 text-sm">
        <FormSelection
          forms={forms}
          selectedForm={selectedForm}
          onSelectForm={(form) => {
            setSelectedForm(form);
            const firstStrength = Object.keys(options[form])[0];
            setSelectedStrength(firstStrength);
            setSelectedPacking(Object.keys(options[form][firstStrength])[0]);
          }}
        />
        <StrengthSelection
          strengths={strengths}
          selectedStrength={selectedStrength}
          options={options}
          selectedForm={selectedForm}
          selectedPacking={selectedPacking}
          onSelectStrength={(strength) => {
            setSelectedStrength(strength);
            setSelectedPacking(Object.keys(options[selectedForm][strength])[0]);
          }}
        />
        <PackingSelection
          options={options}
          selectedForm={selectedForm}
          selectedStrength={selectedStrength}
          packings={packings}
          selectedPacking={selectedPacking}
          onSelectPacking={setSelectedPacking}
        />
      </div>
      <div className="w-1/3 text-center">
        <h1 className="font-bold">{saltName}</h1>
        <p className="text-slate-600">
          {selectedForm} | {selectedStrength} | {selectedPacking}
        </p>
      </div>
      <div className="flex w-1/3 justify-center">
        <Price
          amount={getLowestPrice(
            options[selectedForm][selectedStrength][selectedPacking]
          )}
        />
      </div>
    </>
  );
};

export default SaltOptions;