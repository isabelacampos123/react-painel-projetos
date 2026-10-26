import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({ titulo, descricao, responsavel, status, tecnologias, destaque, nota }) {
  return (
    <article className={`projeto-card ${destaque ? "destaque" : ""}`}>
      <div className="projeto-topo">
        <h3>{titulo}</h3>
        <StatusBadge status={status} />
      </div>
      
      <p className="projeto-descricao">{descricao}</p>
      
      <p className="projeto-info">
        <strong>Responsável:</strong> {responsavel.nome} ({responsavel.turma})
      </p>

      <p className="projeto-info">
        <strong>Nota:</strong> {nota} — {" "}
        <span className={nota >= 7 ? "aprovado" : "avaliacao"}>
          {nota >= 7 ? "Projeto aprovado" : "Em avaliação"}
        </span>
      </p>
      
      <div className="projeto-tags">
        {tecnologias.map((tec) => (
          <TecnologiaTag key={tec} nome={tec} />
        ))}
      </div>

      {destaque && <div className="badge-destaque">⭐ PROJETO EM DESTAQUE</div>}
    </article>
  );
}
export default ProjetoCard;
