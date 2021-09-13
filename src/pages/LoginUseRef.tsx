import { useRef } from 'react';
import useLogRender from '../hooks/useLogRender';

function LoginUseRef() {
  useLogRender();
  const loginInput = useRef<HTMLInputElement | null>(null);
  const senhaInput = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <div>
        <label htmlFor="login">Login: </label>
        <input name="login" ref={loginInput} />
      </div>
      <div>
        <label htmlFor="senha">Senha: </label>
        <input name="senha" type="password" ref={senhaInput} />
      </div>
      <div>
        <button onClick={() => console.log('logou', { login: loginInput?.current?.value, senha: senhaInput?.current?.value })}>
          Login
        </button>
      </div>
    </>
  );
}

export default LoginUseRef;
