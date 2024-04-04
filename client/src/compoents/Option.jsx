const Option = ({name}) => {
  console.log(name);
  return (
    <form>
      <input type="checkbox" name={name} id={`${name} option`}/>{" "}
      <label htmlFor={`${name} option`}>{name}</label>

    </form>
  )
}

export default Option
