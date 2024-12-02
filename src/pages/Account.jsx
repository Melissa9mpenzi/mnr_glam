const Account = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <form className="mt-4 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Account;
