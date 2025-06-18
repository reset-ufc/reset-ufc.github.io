interface FormInputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    placeholder?: string;
  }
  
  const FormInput: React.FC<FormInputProps> = ({
    label,
    type = 'text',
    value,
    onChange,
    required = false,
    placeholder,
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );

export default FormInput;