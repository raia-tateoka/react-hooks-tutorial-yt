import { useEffect, useState, useContext, useRef, useReducer } from 'react';
import './App.css'
import ShinCodeContext from './main';

/**
 * useState   データが変更されたタイミングでレンダリングする
 * useEffect  発火のタイミングを決めることができる
 *            useEffect内で依存関係のあるものを使わない（無限ループ対策）
 * useContext コンポーネント間のデータの受け渡し
 * useRef     input等の参照したい値を取得することができる
 * useReducer Reduxのような概念（難しいため今はこんなものなんだ程度で覚える）
 * 
 */

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello, Hooks");
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>UseRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>－</button>
    </div>
  );
}

export default App
