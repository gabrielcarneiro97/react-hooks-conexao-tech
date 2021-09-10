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
            <Link to="login-use-state">Login com useState</Link>
          </li>
          <li>
            <Link to="login-use-ref">Login com useRef</Link>
          </li>
          <li>
            <Link to="click-use-ref">Click com useRef</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Main;
