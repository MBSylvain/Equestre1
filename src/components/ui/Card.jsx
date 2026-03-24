const Card = ({ children, className = "", hover = true }) => {
  const baseStyles = "bg-white rounded-2xl overflow-hidden shadow-soft transition-all duration-300";
  const hoverStyles = hover ? "hover:shadow-medium hover:-translate-y-2" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
