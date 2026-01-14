import PropTypes from 'prop-types';

const DepthWrapper = ({ children, depth, className }) => {
  return (
    <div 
      className={className || ''}
      style={{ 
        transform: `translateZ(${depth}px)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};

DepthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  depth: PropTypes.number,
  className: PropTypes.string,
};

DepthWrapper.defaultProps = {
  depth: 20,
  className: '',
};

export default DepthWrapper;