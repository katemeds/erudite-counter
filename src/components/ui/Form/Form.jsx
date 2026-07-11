export function Form({ children, className, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}