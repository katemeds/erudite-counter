import './CloseIcon.scss'

export function CloseIcon({ className = "" }) {
  return (
    <svg
    className={className}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path d="M9.37109 0.5L0.5 9.37109" strokeLinecap="round" />
      <path d="M0.5 0.5L9.37109 9.37109" strokeLinecap="round" />
    </svg>
  );
}
