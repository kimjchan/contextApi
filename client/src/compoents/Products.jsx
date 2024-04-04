const Products = ({name, imagePath, updateItemCount }) => {
  const handleChange = (e)=>{
    const currentValue = e.target.value;
    updateItemCount(name, currentValue);
  }
  return (
    <div style={{textAlign: 'center'}}>
      <img
        style={{width:'75%'}}
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{marginTop: '10px'}}>
        <label style={{textAlign: 'right'}}>{name}</label>
        <input
          style={{marginLeft: 7}}
          type="number"
          placeholder="0"
          min="0"
          name="quantity"
          defaultValue={0}
          onChange={handleChange}
        />

      </form>
    </div>
  )
};

export default Products;
