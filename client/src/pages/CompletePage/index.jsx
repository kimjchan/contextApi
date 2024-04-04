import { useContext, useEffect, useState } from "react"
import { OrderConext } from "../../context/OrderContext";
import axios from "axios";
import ErrorBanner from "../../compoents/ErrorBanner";

const CompletePage = ({setStep}) => {
  const [orderDatas] = useContext(OrderConext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderHistory, setOrderHistroy] = useState([]);
  useEffect(()=>{
    orderCompletd(orderDatas);
  },[orderDatas])

  const orderCompletd = async (orderDatas)=>{
    try{
      let res = await axios.post(`http://localhost:4000/order`, orderDatas);
      setOrderHistroy(res.data);
      setLoading(false)
    }catch(e){
      console.error(e);
      setError(true);
    }
  }

  const orderTable = orderHistory.map((item)=>
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  );

  if(error){
    return <ErrorBanner msg="에러가 발생했습니다."/>
  }

  if(loading){
    return <div>loading...</div>
  }
  else{
    return (
      <div style={{textAlign:"center"}}>
        <h2>주문이 성공했습니다</h2>
        <h3>짐금까지 모든 주문</h3>
        <table style={{margin: 'auto'}}>
          <tbody>
            <tr>
              <th>number</th>
              <th>price</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <br/>
        <button onClick={()=>setStep(0)}>처음으로</button>
        
      </div>
    )
  }
}

export default CompletePage
