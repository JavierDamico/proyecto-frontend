import { useEffect } from "react";
import { useState } from "react";

function CategoryForm() {
  let [data, setData] = useState({
    name: "",
    categoryId: null
  });

  let [errors, setErrors] = useState({});

  let [categories, setCategories] = useState([])

  useEffect(function () {
    fetch('http://localhost:4000/api/categories')
      .then(response => response.json())
      .then(categories => setCategories(categories))
  }, [])

  function submit(e) {

    e.preventDefault();

    fetch('http://localhost:4000/api/categories', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(async response => {
      if (response.status == 201) {
        setData({ name: '', categoryId: null })
      } else {
        let json = await response.json()
        return Promise.reject(json) // Se pone el Promise.reject para que el return no salga y el error pueda pasar al catch
      }
    }).catch(errors => {
      console.log(errors.message.name.msg);
      setErrors(errors)
    })
  }

  function handleInput(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form action="" onSubmit={submit}>
        <select name="categoryId" onInput={handleInput}>
          <option value=""></option>
          {
            categories.map((c, i) => <option key={i} value={c._id}>{c.name}</option>)
          }
        </select>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" value={data.name} onInput={handleInput} />
        <div>{errors.message?.name.msg}</div>
        {/* el ? es solo para react, es como un if si message existe continua */}

        <div>
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;
