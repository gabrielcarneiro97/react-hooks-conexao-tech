import { useRef } from 'react';
import useForceUpdate from '../hooks/useForceUpdate';
import useLogRender from '../hooks/useLogRender';

function ClickUseRef() {
  useLogRender();
  const forceUpdate = useForceUpdate();
  const contador = useRef(0);

  const handleClick = () => {
    contador.current += 1;
    console.log('contador: ', contador.current);
    if (contador.current % 5 === 0) forceUpdate();
  }

  return (
    <div>
      Contador clicks (5 a 5): {contador.current}
      <div>
        <button onClick={handleClick}>Clique</button>
      </div>
    </div>
  );
}

export default ClickUseRef;
