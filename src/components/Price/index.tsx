import NotAvailable from "../NotAvailable";

interface PriceProps {
  amount: number | null;
}

const Price = ({ amount }: PriceProps) => {
  return (
    <>
      {amount && <h1 className="font-bold text-xl">From ₹{amount}</h1>}
      {!amount && <NotAvailable />}
    </>
  );
};

export default Price;