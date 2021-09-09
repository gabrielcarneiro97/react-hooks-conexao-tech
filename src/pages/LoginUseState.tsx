import { useEffect, useState } from "react";

function LoginUseState() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const inputSetState = (
    setState : React.Dispatch<React.SetStateAction<string>>
  ) => (e : React.ChangeEvent<HTMLInputElement>) => setState(e.target.value);

  useEffect(() => {
    console.log('render');
  });

  return (
    <>
      <div>
        <label htmlFor="login">Login: </label>
        <input name="login" onChange={inputSetState(setLogin)} />
      </div>
      <div>
        <label htmlFor="senha">Senha: </label>
        <input name="senha" type="password" onChange={inputSetState(setSenha)} />
      </div>
      <div>
        <button onClick={() => console.log('logou', { login, senha })}>
          Login
        </button>
      </div>
    </>
  );
}

export default LoginUseState;
