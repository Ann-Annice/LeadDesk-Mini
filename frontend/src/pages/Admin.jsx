import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {

    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/leads",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setLeads(res.data);
  }

  async function updateStatus(id, status) {

    const token = localStorage.getItem("token");

    await axios.patch(
      `http://localhost:5000/api/leads/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    loadLeads();
  }

  return (
    
    <div style={{ padding: "30px" }}>

      <h1>Admin Dashboard</h1>
      <input
  type="text"
  placeholder="Search by Name"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

<br /><br />

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Budget</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

        {leads
  .filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((lead) => (

            <tr key={lead.id}>

              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.budget}</td>
              <td>{lead.message}</td>

              <td>

                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(lead.id, e.target.value)
                  }
                >

                  <option>NEW</option>
                  <option>CONTACTED</option>
                  <option>CLOSED</option>

                </select>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Admin;