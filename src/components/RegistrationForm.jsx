import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

function RegistrationForm() {
  const [modalDate, setModalDate] = useState(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = (data) => {
    setModalDate(data);
  };

  const closeModal = () => {
    setModalDate(null);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name - обязательно" })}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email - обязательно",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Некорректный формат email",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password - обязательно",
              minLength: {
                value: 6,
                message: "нельзя меньше 6 символов",
              },
              validate: {
                hasUppercase: (value) =>
                  /[A-ZА-ЯЁ]/.test(value) ||
                  "Пароль должен содержать хотя бы одну заглавную букву",
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "confirmPassword - обязательно",
              minLength: {
                value: 6,
                message: "нельзя меньше 6 символов",
              },
              validate: (value) =>
                value === getValues("password") || "Пароли не совпадают",
            })}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <label htmlFor="date">Date: </label>
          <input
            id="date"
            type="date"
            {...register("date", { required: "Date - поле обязательно" })}
          />
          <p>{errors.date?.message}</p>
        </div>

        <label htmlFor="gender">Gender</label>
        <div>
          <label htmlFor="genderMen">
            <input
              id="genderMen"
              type="radio"
              {...register("gender", { required: "Выберите пол" })}
              value="male"
            />
            men
          </label>
          <label htmlFor="genderWomen">
            <input
              id="genderWomen"
              type="radio"
              {...register("gender", { required: "Выберите пол" })}
              value="female"
            />
            women
          </label>
        </div>
        <p>{errors.gender?.message}</p>

        <div style={{ marginBottom: 10 }}>
          <label htmlFor="tel">Phone:</label>
          <input
            id="tel"
            type="tel"
            {...register("tel", { required: "Phone - поле обязательно" })}
          />
          {errors.tel?.message}
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>
      {
        modalDate && <Modal modalDate={modalDate} closeModal={closeModal}/>
      }
    </>
  );
}

export default RegistrationForm;
