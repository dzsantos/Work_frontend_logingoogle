import { Link } from "react-router-dom";
import { useState } from "react";
import type { User } from "../paginas/home";

interface FormCad {
  user: string;
  email: string;
  telefone?: string;
  senha: string;
}
interface FormCadastroProps {
  userLogado: User | null;
}

export function Loginpage({ userLogado }: FormCadastroProps) {
  const [formData, setFormData] = useState<FormCad>(() => ({
    user: userLogado?.name || "",
    email: userLogado?.email || "",
    senha: "",
    telefone: "",
  }));
  const [jsonExibido, setJsonExibido] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.user || !formData.email || !formData.senha) {
      alert("Preencha todos os campos, por favor.");
      return;
    }
    const dadosParaExibir = {
      ...formData,
      telefone:
        formData.telefone?.trim() === ""
          ? "esse campo está vazio"
          : formData.telefone,
    };
    const resultado = JSON.stringify(dadosParaExibir, null, 2);
    setJsonExibido(resultado);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleClear = () => {
    // Reseta os campos para o estado inicial (vazio ou dados do Google)
    setFormData({
      user: userLogado?.name || "",
      email: userLogado?.email || "",
      senha: "",
      telefone: "",
    });

    // Limpa o JSON que estava aparecendo na tela
    setJsonExibido("");
  };

  return (
    <div className="page-wrapper">
      <header className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/apresentacao">Apresentação</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main className="main-content">
        <div className="card form-container">
          <h2>Crie sua conta</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Senha:</label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Nome:</label>
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Telefone:</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>

            <div className="button-group">
              <button type="submit" className="btn-primary">
                Cadastrar
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={handleClear}
              >
                Limpar
              </button>
            </div>
          </form>
        </div>

        {jsonExibido && (
          <div className="card json-card">
            <h3>Dados em JSON:</h3>
            <pre>{jsonExibido}</pre>
          </div>
        )}
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
