import { useContext, useState } from "react"
import { OrderConext } from "../../context/OrderContext";

const SummaryPage = ({setStep}) => {
  const [checked, setChecked] = useState(false);
  const [orderDetails] = useContext(OrderConext);

  const productArray = Array.from(orderDetails.products); //얕게 복사
  const productList = productArray.map(([key, value])=>
    <li key={key}>
      {value} {key}
    </li>
  );

  const hasOptions = orderDetails.options.size > 0;
  let optionDisplay = null;
  if(hasOptions){
    const optionsArray = Array.from(orderDetails.options.keys());
    const optionList = optionsArray.map((key) => <li key={key}>{key}</li>)

    optionDisplay = (
      <>
        <h2>옵션 : {orderDetails.totals.options}</h2>
        <ol>{optionList}</ol>
      </>
    )
  }

  const handleSubmit = ()=>{
    setStep(2);
  }

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품 : {orderDetails.totals.products}</h2>
      <ul>{productList}</ul>
      {optionDisplay}
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e)=> setChecked(e.target.checked)}
          id="confirm-checkbox"
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        {/* label과 input태그 연결하기 위한 구조 : htmlFor */}
        <br/>
        <button disabled={!checked} type="submit">주문 확인</button>
        {/* 체크해야 버튼을 활성화 하기 구조 */}
      </form>
    </div>
  )
}

export default SummaryPage
