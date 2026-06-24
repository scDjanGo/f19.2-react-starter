import { useCallback, useEffect, useMemo, useState, memo } from "react";

function ReactMemoComponent({inputValue}) {
  const [count, setCount] = useState(0);

  const huge_operation = useCallback(() => {
    let num = null;

    for (let i = 0; i < 100_000; i++) {
      num = Math.floor(Math.random() * 100_000);
    }


    return num;
  }, []);

  const result_huge_operation = useMemo(() => {
    return huge_operation();
  }, []);


  console.log("child component")

  return (
    <div className="p-5">
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>

      <p>{result_huge_operation}</p>
    </div>
  );
}

export default memo(ReactMemoComponent);
