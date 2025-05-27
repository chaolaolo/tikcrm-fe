
const tabs = [
  'Orders Without Design',
  'Orders With Design (Not Yet Fulfilled)',
  'Overdue Orders',
  'Suspicious Orders',
  'Returned Orders'
];


export const OrderTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="mb-4 d-flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`btn border rounded-pill px-3 py-2 fw-medium 
            ${activeTab === tab ? 'btn-primary text-white' : 'btn-light text-dark hover-blue'}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
