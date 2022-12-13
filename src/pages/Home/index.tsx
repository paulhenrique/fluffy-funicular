import { Link } from "react-router-dom";
import { RegisteredKeys } from "../../components/RegisteredKeys";
import { Translator } from "../../components/Translator";
import { routesPath } from "../../router/ROUTES";

const Home = () => {
  return (
    <div>
      <Translator />
      <Link to={routesPath.keysRegister}>Cadastrar Chaves</Link>
      <RegisteredKeys />
    </div>
  );
};

export default Home;
