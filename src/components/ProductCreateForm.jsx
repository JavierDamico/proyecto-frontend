import { useState } from "react";

function ProductCreateForm() {
  let [errors, setErrors] = useState(null);
  let [success, setSuccess] = useState(false);

  let [brand, setBrand] = useState([
    {
      _id: 1,
      name: "Fiat",
    },
    {
      _id: 2,
      name: "BMW",
    },
    {
      _id: 3,
      name: "Ford",
    },
  ]);

  let [data, setData] = useState({
    name: null,
    description: null,
    price: null,
    stock: 1,
    brand: null,
  });

  function sendFormData(e) {
    console.log(e);
    e.preventDefault();
    //creo un ojeto que representa toda la info que quiero guardar

    // para enviar informacion uso otro fetch a otra direccion
    // tengo que cambiar el metodo a POST
    fetch("http://localhost:4000/products", {
      method: "POST",
      body: JSON.stringify(data), //aca le indico que datos tiene que guardar y lo mando en forma de string
      headers: {
        //porque el fetch no lee objetos
        "content-type": "application/json",
      },
    }).then((response) => {
      if (response.status != 201) {
        setErrors(response.json()); //convierto el body a json
      } else {
        setSuccess(true);
        setErrors(null);
      }
    });
  }
  function handleInput(e) {
    // console.log(e.target.value);
    let inputName = e.target.name;

    setData({
      ...data,
      [inputName]: e.target.value,
    });
  }

  return (
    <>
      {errors ? <p>Revise todos los campos</p> : ""}

      <form
        action="/products"
        method="post"
        autoComplete="off"
        onSubmit={sendFormData}
      >
        <div>
          <label htmlFor="">Nombre </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onInput={handleInput}
          />
        </div>

        <div>
          <label htmlFor="">Descripcion </label>
          <input
            type="text"
            name="description"
            value={data.description}
            onInput={handleInput}
          />
        </div>

        <div>
          <label htmlFor="">Precio</label>
          <input
            type="number"
            name="price"
            min="0"
            value={data.price}
            onInput={handleInput}
          />
        </div>

        <div>
          <label htmlFor="">Stock</label>
          <input
            type="number"
            name="stock"
            min="0"
            value={data.stock}
            onInput={handleInput}
          />
        </div>

        <div>
          <label htmlFor="">Marca</label>
          <select name="brand" value={data.brand} onInput={handleInput}>
            <option value=""></option>
            {brand.map((brand) => {
              return <option value={brand._id}>{brand.name}</option>;
            })}
          </select>
        </div>

        <div>
          <button>Enviar</button>
          {/*con este primer fetch busco la informacion y si la tuviera que filtrar uso un map 
            este fetch por default es un GET
            fetch('http://localhost:4000/api/products')
            esto va adentro de la funcion
            */}
        </div>
      </form>
    </>
  );
}

export default ProductCreateForm;
