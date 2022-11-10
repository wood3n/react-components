import './index.css';

interface Option {
  label: React.ReactNode;
  value: string | number | string[];
}

interface Props {
  options: Option[];
  value?: string | number | string[];
  onChange?: (value: string | number | boolean) => void;
}

const Radio: React.FC<Props> = ({
  options,
  value,
  onChange
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    onChange?.(e.target.value);
  };

  return (
    <ul className="radio">
      {options?.map(o => (
        <li key={String(o.label)} className="radio-option">
          <input className='radio-option-value' type="radio" checked={o.value === value} value={o.value} onChange={handleChange}/>
          <span className='radio-option-label'>{o.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Radio;