import { useRef } from 'react';
import PropTypes from 'prop-types';

const TiltCard = ({ children, className, intensity, scale, glow }) => {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const angleX = (y - centerY) / intensity;
    const angleY = (centerX - x) / intensity;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})`;
    
    if (glow) {
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      card.style.setProperty('--glow-x', `${glowX}%`);
      card.style.setProperty('--glow-y', `${glowY}%`);
    }
  };
  
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    
    if (glow) {
      card.style.setProperty('--glow-x', '50%');
      card.style.setProperty('--glow-y', '50%');
    }
  };

  return (
    <div 
      ref={cardRef}
      className={'relative transition-all duration-300 ease-out cursor-pointer ' + (className || '')}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        '--glow-x': '50%',
        '--glow-y': '50%',
      }}
    >
      {children}
      {glow && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-inherit"
          style={{
            background: 'radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          }}
        />
      )}
    </div>
  );
};

TiltCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  intensity: PropTypes.number,
  scale: PropTypes.number,
  glow: PropTypes.bool,
};

TiltCard.defaultProps = {
  className: '',
  intensity: 20,
  scale: 1.03,
  glow: true,
};

export default TiltCard;