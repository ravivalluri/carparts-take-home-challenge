import React, { useEffect, useState, useMemo, forwardRef, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import Table from "./Table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
    ],
    []
  );
  const [loadingData, setLoadingData] = useState(true);
  const [participants, setParticipants] = useState([]);
  const [games, setGames] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios.get("/participants").then((response) => {
        // check if the data is populated
        setParticipants(response.data);
        // you tell it that you had the result
        setLoadingData(false);
      });
      await axios.get("/games").then((response) => {
        setGames(response.data);
        setLoadingData(false);
      });
    }
    function unionData() {
      console.log("participants::", participants);
      console.log("games::", games);
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  if (
    !loadingData &&
    participants &&
    games &&
    participants.length > 0 &&
    games.length > 0
  ) {
    console.log(participants);
    console.log(games);
  }

  return (
    <Styles>
      <div className="App">
        {/* here you check if the state is loading otherwise if you will not call that you will get a blank page because the data is an empty array at the moment of mounting */}
        {loadingData ? (
          <p>Loading Please wait...</p>
        ) : (
          <Table
            participants={participants}
            games={games}
            loadingData={loadingData}
            columns={columns}
            data={participants}
          />
        )}
      </div>
    </Styles>
  );
}

export default App;
