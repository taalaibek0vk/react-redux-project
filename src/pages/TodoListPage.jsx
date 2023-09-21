import TodoForm from '../components/TodoForm'
import TodoTable from '../components/TodoTable'
import TodoSearchForm from '../components/TodoSearchForm'


const TodoListPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-7">
      <span className='text-2xl col-span-full'>Список дел</span>
      <TodoForm />
      <TodoTable />
      <TodoSearchForm/>
    </div>
  )
}

export default TodoListPage
