function TodoForm ({addTodo}) {
  const [value, setValue] = React.useState ('');

  const handleSubmit = e => {
    // Prevent page reload
    e.preventDefault();
    if (!value) return;
    addTodo (value);

    // Clear form, otherwise it will contain the text from the previous entry
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo ..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}