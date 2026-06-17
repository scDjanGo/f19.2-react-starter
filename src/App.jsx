
function App() {





  
  return (
    <div className="p-5">
      <form className="flex flex-col gap-3">
        <label htmlFor="login" className="border rounded-md p-[6px_12px]">
          <input
            type="text"
            id="login"
            name="login"
            placeholder="Login"
            className="focus:outline-0"
          />
        </label>
        <label htmlFor="password" className="border rounded-md p-[6px_12px]">
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            className="focus:outline-0"
          />
        </label>

        <button type="submit" className="border rounded-md">
          Create
        </button>
      </form>
    </div>
  );
}

export default App;
