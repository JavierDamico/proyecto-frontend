import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Link to="/register">Registrarme</Link>
      </div>
      <div>
        <Link to="/login">Ingresar</Link>
      </div>
      <div>
        <Link to="/products/create">Crear productos</Link>
      </div>
      <div>
        <Link to="/profiles/create">Crear perfil</Link>
      </div>
    </div>
  );
}

export default Home;
