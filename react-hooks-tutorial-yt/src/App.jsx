import { useEffect, useState, useContext } from 'react';
import './App.css'
import ShinCodeContext from './main';

/**
 * useState   データが変更されたタイミングでレンダリングする
 * useEffect  発火のタイミングを決めることができる
 *            useEffect内で依存関係のあるものを使わない（無限ループ対策）
 * useContext コンポーネント間のデータの受け渡し
 * 
 */
function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello, Hooks");
  }, [count]);

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>
    </div>
  );
}

export default App
