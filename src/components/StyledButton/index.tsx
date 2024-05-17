import { FC, MouseEvent } from 'react';

interface StyledButtonProps {
  type: 'selected' | 'primary' | 'dashed' | 'dashedSelected';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text?: string;
}

const StyledButton: FC<StyledButtonProps> = ({ type, disabled = false, onClick, text = 'Not available' }) => {
  const getButtonStyle = (type: string) => {
    switch (type) {
      case 'selected':
        return 'bg-primary button-shadow border border-black';
      case 'primary':
        return 'border-2 border-slate-300 text-gray-500';
      case 'dashed':
        return 'bg-white border-2 border-dashed text-gray-500';
      case 'dashedSelected':
        return 'bg-white border-2 border-gray-500 border-dashed text-black';
      default:
        return '';
    }
  };

  return (
    <button
      disabled={disabled}
      className={`px-3 rounded-lg font-semibold text-sm ${getButtonStyle(type)}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default StyledButton;