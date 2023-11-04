import List from './Components/List'

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: '#E9ECEF',
        padding: 20,
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <List />
    </div>
  );
}

export default App;
