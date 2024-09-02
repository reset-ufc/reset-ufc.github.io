interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function CustomButton({ children, onClick, className }: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`transition-colors border-4 border-[#ec642a] hover:bg-[#ec642a] text-white ease-in-out  font-semibold py-2 px-4 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}