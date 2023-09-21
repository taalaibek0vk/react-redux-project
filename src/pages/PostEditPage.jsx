import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const PostEditPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
  })

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(post)
  }

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className='text-2xl col-span-full'>Редактирование &#9998; </span>
      <form
        onSubmit={handleSubmit}
        className="w-[min(100%,20rem)] mx-auto flex flex-col justify-center gap-3 [&_*]:px-2 [&_*]:py-1 [&>input]:rounded-sm [&>textarea]:rounded-sm [&_button]:rounded-md [&_button]:bg-slate-300 [&_div]:p-0"
      >
        <input type="hidden" value={post.id} name="id" />
        <input type="text" value={post.title} name="title" onChange={handleChange} />
        <textarea value={post.body} name="body" onChange={handleChange} />
        <div className="flex justify-evenly">
          <button type="submit">Сохранить</button>
          <button type="button" onClick={() => navigate(-1)}>Отменить</button>
        </div>
      </form>
    </div>
  )
}

export default PostEditPage
