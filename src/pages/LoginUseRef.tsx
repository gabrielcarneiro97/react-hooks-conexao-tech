import { useEffect, useRef } from "react";

function LoginUseRef() {
  const loginInput = useRef<HTMLInputElement | null>(null);
  const senhaInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log('render');
  });

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
