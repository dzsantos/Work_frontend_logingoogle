import { Link } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export type User = {
  name: string;
  email: string;
  picture: string;
};

interface HomeProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
export function Home({ user, setUser }: HomeProps) {
  function login(credentialResponse: { credential?: string }) {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<User>(credentialResponse.credential);
      setUser(decoded);
    }
  }
  function logout() {
    googleLogout();
    setUser(null);
  }

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
        {!user ? (
          <div className="card login-card">
            <h2>Acesse o site</h2>
            <p>Faça o login com sua conta Google.</p>
            <div className="google-btn-container">
              <GoogleLogin
                onSuccess={login}
                onError={() => console.error("Falhou")}
              />
            </div>
          </div>
        ) : (
          <div className="card profile-card">
            <img src={user.picture} alt="Perfil" className="profile-img" />
            <div className="profile-info">
              <h2>Bem-vindo, {user.name}!</h2>
              <p>{user.email}</p>
            </div>
            <button className="btn-primary" onClick={logout}>
              Sair
            </button>
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
