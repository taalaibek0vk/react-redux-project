

const TodoSearchForm = () => {

  const handleSearch = (e) => {
    e.preventDefault();
  }

  return (

      <form onSubmit={handleSearch} className="hidden w-full lg:flex justify-center gap-3 lg:w-1/2 ">
        <input type="text" className='rounded-sm px-1' />
        <button type="submit" className="bg-slate-300 px-2 py-1 rounded-sm">Поиск</button>
      </form>
  )
}

export default TodoSearchForm
