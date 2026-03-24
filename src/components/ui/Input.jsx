const Input = ({ label, placeholder, value, onChange, type = "text", className = "" }) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && <label className="text-sm font-semibold text-nature-forest ml-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2.5 rounded-xl border-2 border-nature-sand bg-white text-neutral-dark focus:border-primary-500 focus:outline-none transition-colors shadow-sm"
      />
    </div>
  );
};

export default Input;
