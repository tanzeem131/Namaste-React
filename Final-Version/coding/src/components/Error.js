import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex justify-center items-center text-4xl font-extrabold">
      <p>OOPS!!!</p>
      <p>Something went wrong!</p>
      <p>
        {err.status} {err.statusText}
      </p>
    </div>
  );
};

export default Error;
