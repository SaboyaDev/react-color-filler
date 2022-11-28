const ColorInput = ({color, setColor}) => {
  return (
    <form>
      <label htmlFor="color-input"></label>
      <input
        id='color-input'
        type="text"
        placeholder='Type your color'
        value={ color }
        onChange={e => setColor(e.target.value)}
      />
    </form>
  )
}
export default ColorInput