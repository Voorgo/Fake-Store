import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";

const Total = () => {
  const { state } = useContext(ProductContext);
  const [, setRender] = useState(state);
  const items = JSON.parse(sessionStorage.getItem("items"));
  useEffect(() => {
    setRender(state);
  }, [state]);

  const sumTotal = () => {
    return items !== null
      ? items.reduce((first, second) => {
          return first + second.price * second.quantity;
        }, 0)
      : 0;
  };
  return (
    <div style={{ display: items ? "initial" : "none" }}>
      Total: ${sumTotal().toFixed(2)}
    </div>
  );
};

export default Total;
