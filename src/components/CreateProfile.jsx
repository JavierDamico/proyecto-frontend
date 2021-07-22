import { useState } from "react";

function CreateProfile() {
  let [errors, setErrors] = useState(null);
  let [success, setSuccess] = useState(false);

  let [data, setData] = useState({
    firstName: null,
    lastName: null,
    birthDate: null,
  });

  function sendFormData(e) {
    console.log(e);
    e.preventDefault();
    //creo un ojeto que representa toda la info que quiero guardar

    // para enviar informacion uso otro fetch a otra direccion
    // tengo que cambiar el metodo a POST
    fetch("http://localhost:4000/api/profiles", {
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
        action="/profiles"
        method="post"
        autoComplete="off"
        onSubmit={sendFormData}
      >
        <div>
          <label htmlFor="">Nombre </label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onInput={handleInput}
          />
        </div>

        <div>
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onInput={handleInput}
          />
        </div>

        <div>
          <label htmlFor="">Fecha de nacimiento</label>
          <input
            type="date"
            name="birthDate"
            value={data.birthDate}
            onInput={handleInput}
          />
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

export default CreateProfile;
