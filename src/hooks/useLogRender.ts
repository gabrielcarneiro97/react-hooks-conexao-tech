import { useEffect } from 'react';

export default function useLogRender() {
  useEffect(() => {
    console.log('render');
  });
}
