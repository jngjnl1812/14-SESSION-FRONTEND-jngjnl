import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>새로운 시작!</h1>
      
      <p>현재 숫자: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        1 더하기
      </button>

      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        초기화
      </button>
    </div>
  );
}

export default App;