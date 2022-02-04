import { useEffect, useState } from "react";
import Table from "./Components/table";
import Layout from "./Components/layout";
import { getPhysicians, getSchedule } from "./Controller";
import List from "./Components/List";

export const data = [
  {
    "Country Name": "Afghanistan",
    Capital: "Kabul",
    Currency: "Afghani",
  },
  {
    "Country Name": "Albania",
    Capital: "Tirane",
    Currency: "Lek",
  },
  {
    "Country Name": "Algeria",
    Capital: "Algiers",
    Currency: "Dinar",
  },
];

const App = () => {
  const [schedule, setSchedule] = useState<number | undefined>();
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([getPhysicians().then((res) => setList(res.data))]);
  }, []);

  const handleGetDoctor = (id: string) => {
    getSchedule(id).then((res) => {
      console.log(res);
      setSchedule(res.data);
    });
  };

  return (
    <Layout>
      <div>
        <h2>PHYSICIANS</h2>
        <List data={list} handleSelect={handleGetDoctor} />
      </div>
      <div>
        <div>{schedule && <Table data={schedule} />}</div>
      </div>
    </Layout>
  );
};

export default App;
