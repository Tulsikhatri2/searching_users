import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";

const Data = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos/";
  const [info, setInfo] = useState();
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setFiltered(info.filter((item) => item.title.includes(value)));
  };

  useEffect(() => {
    axios.get(URL).then((response) => {
      setInfo(response.data);
      setFiltered("")
    });
  }, []);

  return (
    <>
      <Search item={value} handleChange={handleChange} />
      <table className="table table-hover">
        <thead >
          <tr >
            <th className="text-primary">S. No.</th>
            <th className="text-primary">Title</th>
          </tr>
        </thead>
        <tbody>
          {filtered ? (
            <>
              {filtered?.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                    </tr>
                  </>
                );
              })}
            </>
          ) : (
            <>
              {info?.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                    </tr>
                  </>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Data;
