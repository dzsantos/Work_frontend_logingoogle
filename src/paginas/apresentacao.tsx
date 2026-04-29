import { Link } from "react-router-dom";
export function Apresentacao() {
  return (
    <div className="page-wrapper">
      <header className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/apresentacao">Apresentação</Link>
          <Link to="/login">login</Link>
        </nav>
      </header>

      <main className="main-content">
        <section className="card apresentacao-card">
          <h2>Denzel e Marcos</h2>
          <p></p>
          <h1>Quem é Denzel?</h1>

          <p className="intro-text">
            Meu nome é <strong>Denzel Santos</strong>, tenho 18 anos, estudo na
            FAETEC, cursando o 3º ano do ensino médio com curso técnico em
            informática.
          </p>

          <div className="details-container">
            <details>
              <summary>Habilidades</summary>
              <ul>
                <li>
                  <strong>Frontend:</strong> HTML5, CSS e React.js
                </li>
                <li>
                  <strong>Linguagens:</strong> TypeScript
                </li>
              </ul>
            </details>

            <details>
              <summary>Projetos</summary>
              <p>Minha jornada prática envolve aplicações funcionais:</p>
              <ul>
                <li>
                  <strong>TCC</strong> Projeto para ajudar pessoas com TDAH e
                  suas rotinas.
                </li>
                <li>
                  <strong>Trabalho de edição</strong> Renda com edição de
                  vídeos.
                </li>
              </ul>
            </details>

            <details>
              <summary>Interesses e Hobbies</summary>
              <ul>
                <li>Filmes s2000</li>
                <li>Jogar videogame</li>
                <li>Dormir muito</li>
                <li>Ficar com a minha família</li>
              </ul>
            </details>
          </div>

          <p className="orientacao-text"></p>
        </section>
      </main>

      <footer className="footer">
        <p>
          Desenvolvido por{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            Denzel Santos
          </a>
        </p>
      </footer>
    </div>
  );
}
