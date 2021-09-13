import { useMemo, useRef, useState } from 'react';

function hasLowerCase(str : string) {
  return str.toUpperCase() !== str;
}

function hasUpperCase(str : string) {
  return str.toLowerCase() !== str;
}


function LoginUseState() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const [senha, setSenha] = useState('');
  const isValid = useMemo(() => senha.length === 0 || (senha.length > 8 && (hasLowerCase(senha) && hasUpperCase(senha))), [senha]);
  console.log(isValid);

  const inputSetState = (
    setState : React.Dispatch<React.SetStateAction<string>>
  ) => (e : React.ChangeEvent<HTMLInputElement>) => setState(e.target.value);

  return (
    <>
      <div>
        <label htmlFor="login">Login: </label>
        <input name="login" ref={loginRef} />
      </div>
      <div>
        <label htmlFor="senha">Senha: </label>
        <input name="senha" type="password" onChange={inputSetState(setSenha)} />
      </div>
      {
        !isValid &&
        <div>
          Senha Inválida! Precisa ter 8 dígitos, sendo um deles letra minúscula e outra maiúscula!
        </div>
      }
      <div>
        <button onClick={() => console.log('logou', { login: loginRef.current?.value, senha })}>
          Login
        </button>
      </div>
    </>
  );
}

export default LoginUseState;
