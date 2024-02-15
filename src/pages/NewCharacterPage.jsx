import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewCharacterPage.css";

function NewCharacterPage() {
  const API_URL = "http://localhost:5000/characters";

  const navigate = useNavigate();

  const [charName, setCharName] = useState(null);
  const [charImage, setCharImage] = useState(null);
  const [charDesc, setCharDesc] = useState(null);
  const [charPower, setCharPower] = useState(null);

  const handleName = (e) => {
    setCharName(e.target.value);
  };
  // const handleName = (e)=>{console.log(e.target.value)}
  const handleImage = (e) => {
    setCharImage(e.target.value);
  };
  const handleDescription = (e) => {
    setCharDesc(e.target.value);
  };
  const handlePower = (e) => {
    setCharPower(e.target.value);
  };
  const handleSubmit = (e) => {
    const character = {
      name: charName,
      image_url: charImage,
      description: charDesc,
      power: charPower,
    };
    axios
      .post(API_URL, character)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <div id="create-new-page">
      <div id="form-outer">
        <h1 id="form-header">Create New Character</h1>
        <form id="form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" onChange={handleName} />
          </label>
          <br />
          <label>
            Image URL
            <input type="url" name="name" onChange={handleImage} />
          </label>
          <br />
          <label>
            Description
            <input type="text" name="name" onChange={handleDescription} />
          </label>
          <br />
          <label>
            Power
            <input type="text" name="name" onChange={handlePower} />
          </label>
          <br />
          <button>Create</button>
        </form>
      </div>
    </div>
  );
}

export default NewCharacterPage;
