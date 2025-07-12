
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// add Task ..........................................................................
const Create = (props) => {
  const todo = props.todo;
  const setTodo = props.setTodo;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    console.log(data);

    const copytodos = [...todo];
    copytodos.push(data);
    setTodo(copytodos);
    toast.success("Created task")

    reset();
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Todo</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("task", { required: "title can not be empty" })}
          type="text" 
          placeholder="Enter task"
        />

        {/* for error showing */}

        {/* {errors && errors.task && errors.task.message && (
          <small>{errors.task.message}</small>
        )} */}

        <small>{errors?.task?.message}</small>

        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
