import { useState } from "react"

const SummaryPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <form>
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
