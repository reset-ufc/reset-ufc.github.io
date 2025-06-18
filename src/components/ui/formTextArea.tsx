interface FormTextAreaProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    rows?: number;
  }
  
  const FormTextArea: React.FC<FormTextAreaProps> = ({
    label,
    value,
    onChange,
    required = false,
    rows = 4,
  }) => (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        rows={rows}
        required={required}
      />
    </div>
  );

export default FormTextArea;