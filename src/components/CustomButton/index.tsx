interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function CustomButton({ children, onClick, className }: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#ec642a] hover:bg-[#c55322] text-white ease-in-out transition delay-150 font-semibold py-2 px-4 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}