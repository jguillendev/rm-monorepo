function App() {
  return (
    <div className="bg-green-500">
      <h1 className="text-6xl py-4 px-6 font-bold text-gray-900">holas</h1>
      <p className="px-6 text-gray-700 font-bold text-2xl">version: {process.env.REACT_APP_VERSION}</p>
    </div>
  );
}

export default App;
