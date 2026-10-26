function StatusBadge({ status }) {
    let classeStatus = "status-padrao";
  
    if (status === "Concluído") classeStatus = "status-concluido";
    if (status === "Em desenvolvimento") classeStatus = "status-desenvolvimento";
    if (status === "Planejamento") classeStatus = "status-planejamento";
  
    return <span className={`status-badge ${classeStatus}`}>{status}</span>;
  }
  export default StatusBadge;
  