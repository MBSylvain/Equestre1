import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ChevronDown, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = [
    { id: 'tradition', label: 'Terre & Tradition', color: 'bg-[#f5ae19]' },
    { id: 'royal', label: 'Élégance Royale', color: 'bg-[#bf9b30]' },
    { id: 'nordic', label: 'Scandinave & Nature', color: 'bg-[#7c9673]' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-full hover:bg-white/10 transition-colors text-primary-500 border border-white/20"
        title="Changer le thème"
      >
        <Palette size={20} />
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-nature-sand overflow-hidden z-[100]"
          >
            <div className="p-2 space-y-1">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                    theme === t.id ? 'bg-nature-sand/30 text-nature-forest' : 'hover:bg-nature-sand/10 text-neutral-dark'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${t.color}`} />
                    <span className="text-sm font-medium">{t.label}</span>
                  </div>
                  {theme === t.id && <Check size={16} className="text-nature-forest" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
