import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Products from "./Products";
import Option from "./Option";
import ErrorBanner from "./ErrorBanner";
import { OrderConext } from "../context/OrderContext";

const Type = ({orderType}) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderData, updateItemCount] = useContext(OrderConext);

  useEffect(()=>{
    loadItems(orderType);
  },[orderType])

  const loadItems = async (orderType) => {
    try {
      const res = await axios.get(`http://localhost:4000/${orderType}`);
      setItems(res.data);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const ItemComponent = orderType === "products" ? Products : Option;

  const optionItems = items.map(item =>
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>updateItemCount(itemName, newItemCount, orderType)}
    />
  );

  if(error){
    return <ErrorBanner msg="에러가 발생했습니다"/>
  }

  return (
    <div>
        <h2>주문 종류</h2>
        <p>하나의 가격</p>
        <p>총 가격 : {orderData.totals[orderType]}</p>
        <div style={{
          display: 'flex',
          flexDirection: orderType==="options" ? "column" : "row"
        }}>
          {optionItems}
        </div>
    </div>
  )
}

export default Type
