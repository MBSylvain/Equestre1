import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = "", variant = "primary", size = "md" }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md";
  
  const variants = {
    primary: "bg-primary-500 text-nature-forest hover:bg-primary-600",
    secondary: "bg-nature-forest text-white hover:bg-nature-green border-2 border-transparent",
    outline: "bg-transparent text-nature-forest border-2 border-nature-forest hover:bg-nature-forest hover:text-white",
    ghost: "bg-transparent text-nature-forest hover:bg-nature-sand shadow-none"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-8 py-3 text-base rounded-full",
    lg: "px-10 py-4 text-lg rounded-full"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
