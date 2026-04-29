import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./paginas/home";
import { Apresentacao } from "./paginas/apresentacao";
import { Loginpage } from "./paginas/login";
import { useState } from "react";

type User = {
  name: string;
  email: string;
  picture: string;
};

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/apresentacao" element={<Apresentacao />} />
        <Route path="/login" element={<Loginpage userLogado={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
