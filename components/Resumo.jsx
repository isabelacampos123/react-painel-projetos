function Indicador({ rotulo, valor, tipo }) {
    return (
      <div className={`indicador-card ${tipo}`}>
        <div className="indicador-rotulo">{rotulo}</div>
        <div className="indicador-valor">{valor}</div>
      </div>
    );
  }
  
  function Resumo({ total, concluidos, emDesenvolvimento }) {
    return (
      <div className="resumo-container">
        <Indicador rotulo="Total" valor={total} tipo="total" />
        <Indicador rotulo="Concluídos" valor={concluidos} tipo="concluido" />
        <Indicador rotulo="Em desenvolvimento" valor={emDesenvolvimento} tipo="desenvolvimento" />
      </div>
    );
  }
  export default Resumo;
  