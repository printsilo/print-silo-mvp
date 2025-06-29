import React from "react";

const products = [
  {
    title: "Cable Holder Clip",
    description: "Organize your cables with this 3D printable clip.",
    fileUrl: "#",
  },
  {
    title: "Wall Hook",
    description: "A strong, minimalist hook for jackets and bags.",
    fileUrl: "#",
  },
  {
    title: "Phone Stand",
    description: "Compact stand for smartphones, ideal for desks.",
    fileUrl: "#",
  },
];

function App() {
  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Print-Silo: Functional 3D Print Tools
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ fontSize: "1.25rem" }}>{product.title}</h2>
            <p style={{ color: "#555" }}>{product.description}</p>
            <a
              href={product.fileUrl}
              download
              style={{
                display: "inline-block",
                marginTop: "0.5rem",
                backgroundColor: "#3b82f6",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
