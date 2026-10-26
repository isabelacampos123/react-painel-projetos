function Indicador({ rotulo, valor, cor }) {
    return (
      <div style={{ backgroundColor: "#f8f9fa", padding: "10px 20px", borderRadius: "6px", textAlign: "center", minWidth: "120px", borderTop: `4px solid ${cor}` }}>
        <div style={{ fontSize: "12px", color: "#6c757d", fontWeight: "bold" }}>{rotulo}</div>
        <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "5px" }}>{valor}</div>
      </div>
    );
  }