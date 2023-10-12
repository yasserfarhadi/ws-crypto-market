import React from 'react';

const WSContext = React.createContext<any[]>([]);
export const useWSContext = () => React.useContext(WSContext);

const WSContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [isReady, setIsReady] = React.useState(false);
  const [val, setVal] = React.useState<any>(null);

  const ws = React.useRef<WebSocket | null>(null);

  React.useEffect(() => {
    const socket = new WebSocket('wss://ws.bitpin.org');

    socket.onopen = () => setIsReady(true);
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => setVal(event.data);

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  const ret = [isReady, val, ws.current?.send.bind(ws.current)];

  return <WSContext.Provider value={ret}>{children}</WSContext.Provider>;
};

export default WSContextProvider;
