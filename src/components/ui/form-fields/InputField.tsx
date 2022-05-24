import React from 'react';

const InputField = React.forwardRef<
  HTMLInputElement,
  {
    type?: 'text' | 'date' | 'radio' | 'number' | 'password' | 'email' | 'tel' | 'address' | 'url' | 'search' | 'color' | 'file' | 'time' | 'datetime-local' | 'month' | 'range' | 'week';
    className?: string;
    errorMessage?: string;
    label?: string;
    readOnly?: boolean;
    placeholder?: string;
  }
>(({
  type = 'text', className, errorMessage, label, placeholder, ...otherProps
}, ref) => (
  <div className={`w-full space-y-0.5 ${className}`}>
    {label && (
      <p className={`font-medium text-gray-500
     ${errorMessage ? 'text-red-500' : ''}`}
      >
        {label}
      </p>
    )}
    <input
      {...otherProps}
      ref={ref}
      type={type}
      placeholder={placeholder || label}
      className={`w-full bg-gray-500/20 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent py-2 px-3 ${className} ${errorMessage ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
    />
    {errorMessage && <p className="text-xs font-medium text-red-500">{errorMessage}</p>}
  </div>
));

InputField.defaultProps = {
  type: 'text',
  className: '',
  errorMessage: '',
  label: '',
  readOnly: false,
  placeholder: '',
};

export default InputField;
