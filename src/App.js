import './App.css';
import React, {useState} from 'react';
import data from './data.json';
import DataTable from './components/Datatable';
function App() {

  const [search,setsearch] = useState("");
  const ChangingSearch = (event)=>{
    setsearch(event.target.value)
  }
  const resultSearch = (data)=>{
    return (
      data.filter((eachObj)=>eachObj.Title.toLowerCase().indexOf(search) > -1  || eachObj.Year.toLowerCase().indexOf(search) > -1
      || eachObj.Country.toLowerCase().indexOf(search) > -1)
    );
  }
 
  return (
    <div className="App">
      <div>
        <input id="inputBox" type="text" placeholder="search.." value={search} onChange={ChangingSearch} />
      </div>
      <div>
      <DataTable data={resultSearch(data)}/>
      </div>
      
    </div>
  );
}

export default App;
