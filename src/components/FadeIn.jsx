import { useEffect, useState } from 'react';

const FadeInSection = ({ children, pageSection }) => {
  const [isVisible, setVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById(pageSection);
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setVisible(true);
      window.removeEventListener('scroll', handleScroll); // Desactiva el evento después de que se vuelve visible
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full flex justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default FadeInSection;