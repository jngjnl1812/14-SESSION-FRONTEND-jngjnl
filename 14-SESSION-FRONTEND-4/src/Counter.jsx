import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`숫자가 변경되었습니다: ${count}`);
    }, [count]);
    
    return (
        <>
        <p>현재 숫자: {count}</p>
        <button onClick ={() => setCount(count + 1)}>+1</button>
        <button onClick ={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>-1</button>
        </>
    );
}

export default Counter;