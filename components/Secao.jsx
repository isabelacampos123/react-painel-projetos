function Secao({ titulo, children }) {
    return (
      <section className="secao">
        <h2 className="secao-titulo">{titulo}</h2>
        <div>{children}</div>
      </section>
    );
  }
  export default Secao;
  