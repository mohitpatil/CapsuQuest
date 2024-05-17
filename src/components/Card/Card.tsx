import { useApiContext } from "../../utils/useContent";
import SaltOptions from "../SaltOptions";

const Card = () => {
  const { saltData } = useApiContext();
  return (
    <div className="flex flex-col gap-4">
      {saltData?.map((record) => (
        <div
          className="flex items-center justify-between custom-shadow rounded-lg p-6 shadow-bg green-gradient-bg"
          key={record.salt}
        >
          {record.salt_forms_json && (
            <SaltOptions options={record.salt_forms_json} saltName={record.salt} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
