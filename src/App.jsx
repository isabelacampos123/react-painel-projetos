import "./Index.css";
import ProjetoCard from "./ProjetoCard";
import Secao from "./Secao";
import Resumo from "./Resumo";

function App() {

  return (
    <div className="container">
      <h1>Painel de Projetos</h1>
      
      <Secao titulo="Resumo do Painel">
        <Resumo total={total} concluidos={concluidos} emDesenvolvimento={emDesenvolvimento} />
      </Secao>

      <Secao titulo="Projetos da Turma">
        <div className="projetos-lista">
          {projetos.map((projeto) => (
            <ProjetoCard key={projeto.id} {...projeto} />
          ))}
        </div>
      </Secao>
    </div>
  );
}
export default App;
