import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div>
        Exemplos:
      </div>
      <div>
        <ul>
          <li>
            <Link to="click-use-ref">Contador de clicks com useRef</Link>
          </li>
          <li>
            <Link to="timer-use-ref">Timer com useRef</Link>
          </li>
          <li>
            <Link to="login-use-state">Login com useState</Link>
          </li>
          <li>
            <Link to="login-use-ref">Login com useRef</Link>
          </li>
          <li>
            <Link to="pass-use-memo">Erro na senha com useMemo</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Main;
