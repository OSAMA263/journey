export default function Loader() {
  return (
    <div className="loader-container">
      <svg
        className="loader-icon"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 256 256"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M120,80A40,40,0,1,1,80,40,40,40,0,0,1,120,80Zm56,40a40,40,0,1,0-40-40A40,40,0,0,0,176,120ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm96,0a40,40,0,1,0,40,40A40,40,0,0,0,176,136Z"></path>
      </svg>
    </div>
  );
}
