const Textarea = ({ label, placeholder, value, onChange, rows = 4, className = "" }) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && <label className="text-sm font-semibold text-nature-forest ml-1">{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="px-4 py-3 rounded-xl border-2 border-nature-sand bg-white text-neutral-dark focus:border-primary-500 focus:outline-none transition-colors shadow-sm resize-none"
      />
    </div>
  );
};

export default Textarea;
