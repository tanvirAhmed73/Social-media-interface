interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const TabButton = ({ label, isActive, onClick }: TabButtonProps) => (
  <button
    className={`pb-4 text-sm font-medium ${
      isActive ? "text-black font-semibold" : "text-gray-500"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);
