export default function MainBtn({ className = "", children, type = "button" }) {
  return (
    <button
      type={type}
      className={`font-semibold px-6 py-2 glowing-btn ${className}`}
    >
      {children ?? "Get Started"}
    </button>
  );
}
