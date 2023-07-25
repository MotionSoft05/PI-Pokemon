import axios from "axios";
import FormBG from "../../Media/FormBG.mp4";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import validate from "./Validate";
import { getTypes } from "../../Redux/actions";
import {
  BackgroundVideo,
  MainDiv,
  StyledH1,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledOptions,
  StyledH3,
  FormsLocation,
} from "./StyledForm";

function Form() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const types = useSelector((state) => state.types);

  const initialState = {
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: {
      type1: "",
      type2: "",
    },
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "types") {
      setForm((prevForm) => ({
        ...prevForm,
        types: { ...prevForm.types, [event.target.id]: value },
      }));
    } else {
      setForm((prevForm) => ({ ...prevForm, [property]: value }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formErrors = validate(form);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      axios
        .post("http://localhost:3001/pokemons", form)
        .then((res) => {
          alert(res.data);
          setForm(initialState);
        })
        .catch((err) => alert(err));
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src={FormBG} type="video/mp4" />
      </BackgroundVideo>
      <MainDiv>
        <form onSubmit={submitHandler}>
          <StyledH1>Create your pokemon!</StyledH1>
          <StyledForm>
            <StyledInput
              type="text"
              value={form.name}
              onChange={changeHandler}
              placeholder="Name"
              name="name"
            />
            {errors.name && <p>{errors.name}</p>}
          </StyledForm>
          <StyledForm>
            <StyledInput
              type="text"
              value={form.image}
              onChange={changeHandler}
              placeholder="Image"
              name="image"
            />
            {errors.image && <p>{errors.image}</p>}
          </StyledForm>
          <StyledForm>
            <StyledInput
              type="number"
              value={form.life}
              onChange={changeHandler}
              placeholder="Life Points"
              name="life"
            />
            {errors.life && <p>{errors.life}</p>}
          </StyledForm>
          <StyledForm>
            <StyledInput
              type="number"
              value={form.attack}
              onChange={changeHandler}
              placeholder="Attack Points"
              name="attack"
            />
            {errors.attack && <p>{errors.attack}</p>}
          </StyledForm>
          <StyledForm>
            <StyledInput
              type="number"
              value={form.defense}
              onChange={changeHandler}
              placeholder="Defense Points"
              name="defense"
            />
            {errors.defense && <p>{errors.defense}</p>}
          </StyledForm>
          <StyledForm>
            <StyledInput
              type="number"
              value={form.speed}
              onChange={changeHandler}
              placeholder="Speed Points"
              name="speed"
            />
            {errors.speed && <p>{errors.speed}</p>}
          </StyledForm>
          <StyledForm>
            <StyledInput
              type="number"
              value={form.height}
              onChange={changeHandler}
              placeholder="Height in cm"
              name="height"
            />
            {errors.height && <p>{errors.height}</p>}
          </StyledForm>
          <StyledForm>
            <StyledInput
              type="number"
              value={form.weight}
              onChange={changeHandler}
              placeholder="Weight in kg"
              name="weight"
            />
            {errors.weight && <p>{errors.weight}</p>}
          </StyledForm>{" "}
          <StyledH3>Types</StyledH3>
          <FormsLocation>
            <div>
              <StyledSelect
                value={form.types.type1}
                onChange={changeHandler}
                name="types"
                id="type1"
              >
                {types.map((type) => (
                  <StyledOptions key={type.id} value={type.name}>
                    {type.name}
                  </StyledOptions>
                ))}
              </StyledSelect>
              {errors.types && <p>{errors.types}</p>}
            </div>
            <div>
              <StyledSelect
                value={form.types.type2}
                onChange={changeHandler}
                name="types"
                id="type2"
              >
                {types.map((type) => (
                  <StyledOptions key={type.id} value={type.name}>
                    {type.name}
                  </StyledOptions>
                ))}
              </StyledSelect>
              {errors.types && <p>{errors.types}</p>}
            </div>
          </FormsLocation>
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </MainDiv>
    </>
  );
}

export default Form;
