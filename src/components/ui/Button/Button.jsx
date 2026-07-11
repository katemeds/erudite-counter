import "./Button.scss";

export function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  type = 'button',
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`button button--${variant} button--${size} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
