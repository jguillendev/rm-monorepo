function App() {
  return (
    <div className="bg-orange-600">
      <p className="text-4xl font-bold">xald app typescript</p>
      <p className="text-2xl font-bold">version:  {process.env.REACT_APP_VERSION}</p>
    </div>
  );
}

export default App;
