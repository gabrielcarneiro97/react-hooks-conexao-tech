import { useState } from 'react';

export default function useForceUpdate() {
  const [, setState] = useState({});
  return () => setState({});
}
