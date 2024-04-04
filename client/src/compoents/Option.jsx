const Option = ({name, updateItemCount}) => {
  
  return (
    <form>
      <input 
        type="checkbox" 
        name={name} 
        id={`${name} option`}
        onChange={(e)=> updateItemCount(name, e.target.checked ? 1 : 0)}/>{" "}
      <label htmlFor={`${name} option`}>{name}</label>

    </form>
  )
}

export default Option
