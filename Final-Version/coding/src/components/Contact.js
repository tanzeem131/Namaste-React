const Contact = () => {
  return (
    <div className="h-[555px] p-4 m-4">
      <h1 className="text-4xl font-bold">Contact us</h1>
      <form className="border-b-4 border-t-4 my-4">
        <input
          type="text"
          placeholder="Name"
          className="border-black border-2 rounded-lg p-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="Message"
          className="border-black p-2 m-2 border-2 rounded-lg"
        ></input>
        <input
          type="text"
          placeholder="Email Id"
          className="border-black p-2 m-2 border-2 rounded-lg"
        ></input>
        <button className="border-black p-2 m-2 bg-blue-600 rounded-lg">
          Submit
        </button>
      </form>
      <h1 className="text-2xl font-semibold my-4">
        Send an email 📩 to us at{" "}
        <a className="font-bold">urbantastes@gmail.com</a>
      </h1>
    </div>
  );
};
export default Contact;
