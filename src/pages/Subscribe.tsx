import { toast } from "react-toastify";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Illustration from "../assets/illustration.svg";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAddNewSubscriberMutation } from "../graphql/generated";

interface IFormInputs {
  name: string;
  email: string;
}

const schema = yup
  .object({
    name: yup.string().min(4).required("Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
  })
  .required();

export const SubscribePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [createSubscribe, { loading: isLoading }] =
    useAddNewSubscriberMutation();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const { name, email } = data;

    const result = await createSubscribe({ variables: { name, email } });
    if (result.errors) {
      toast(`Something went wrong ${result.errors}`, {
        type: "error",
      });
      return;
    }

    toast("You have successfully subscribed!", {
      type: "success",
    });

    navigate("/event/lesson/");
  };

  return (
    <div className="flex bg-blur bg-cover">
      <div className="bg-react-logo bg-no-repeat bg-center h-ful w-full">
        <div className="flex pt-28 items-center justify-between w-[1100px] mx-auto">
          <div className="flex flex-col gap-6 max-w-xl">
            <Logo />
            <h1 className="text-4xl">
              Construa uma{" "}
              <span className="text-blue-500">aplicação completa</span>, do
              zero, com <span className="text-blue-500">React JS</span>
            </h1>
            <p className="text-base text-gray-200">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            className="bg-gray-700 rounded p-8 border border-gray-600"
          >
            <strong className="font-bold text-2xl">
              Inscreva-se gratuitamente
            </strong>
            <div className="flex flex-col gap-2 mt-6">
              <input
                {...register("name", { required: true, minLength: 4 })}
                className={`${
                  !!errors.name ? "border-red-500" : ""
                }  h-14 rounded w-full bg-gray-900 flex items-center text-base px-4 py-2 placeholder:text-gray-300 border border-transparent focus:border-green-500 transition-all outline-none`}
                type="text"
                placeholder="Seu nome completo"
              />
              {!!errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className={`
                  ${
                    !!errors.email ? "border-red-500" : ""
                  } h-14 rounded w-full bg-gray-900 flex items-center text-base px-4 py-2 placeholder:text-gray-300 border border-transparent focus:border-green-500 transition-all outline-none`}
                type="email"
                placeholder="Digite seu email"
              />
              {!!errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}

              <button
                type="submit"
                className="rounded bg-green-500 uppercase flex items-center justify-center h-14 w-full mt-6 font-bold hover:brightness-90 transition-all duration-200 ease-in-out disabled:brightness-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : " Garantir minha vaga"}
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center w-[1100px] mx-auto">
          <img src={Illustration} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};
