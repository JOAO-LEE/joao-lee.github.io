import "./PageTitle.css";

export function PageTitle({ textContent }: { textContent: string }) {
  return (
    <h1
      className="font-styled-bold tracking-widest page-title"
      data-title={textContent}
    >
      {textContent}
    </h1>
  );
}
