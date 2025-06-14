import Costs from './components/Costs/Cost';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const costs = [
    {
      date: new Date(2025, 2, 12),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      date: new Date(2025, 11, 12),
      description: 'MacBook',
      amount: 1254.72,
    },
    {
      date: new Date(2025, 4, 1),
      description: 'Джинсы',
      amount: 49.99,
    },
  ];

  return (
    <div>
      <NewCost />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
