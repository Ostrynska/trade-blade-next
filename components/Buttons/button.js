import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Button({
  variant = 'filled',
  size = 'md',
  children,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const classes = `btn ${variant} ${size} ${className}`;

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};
