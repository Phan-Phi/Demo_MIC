import React, { useEffect, useState } from "react";
import { useUpdateEffect } from "react-use";
export default function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // useUpdateEffect(() => {
  //   console.log("count", count); // will only show 1 and beyond

  //   return () => {
  //     // *OPTIONAL*
  //     // do something on unmount
  //   };
  // }); //

  console.log("render");
  return <div>Count: {count}</div>;
}
