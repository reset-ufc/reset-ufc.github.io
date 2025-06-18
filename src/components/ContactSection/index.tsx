import FormInput from "../ui/formInput";

interface ContactSectionProps {
    contact: {
      email: string;
      github: string;
      latter: string;
    };
    onChange: (contact: { email: string; github: string; latter: string }) => void;
  }
  
const ContactSection: React.FC<ContactSectionProps> = ({ contact, onChange }) => (
<div className="md:col-span-2">
    <h4 className="text-md font-medium text-gray-700 mb-2">Informações de Contato</h4>
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
    <FormInput
        label="Lattes"
        value={contact.latter}
        onChange={(value) => onChange({ ...contact, latter: value })}
    />
    </div>
</div>
);

export { ContactSection };