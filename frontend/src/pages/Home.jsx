import { useState } from "react";
import axios from "axios";

function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://leaddesk-mini-x9hq.onrender.com/api/leads", form);

      alert("Lead Submitted Successfully!");

      setForm({
        name: "",
        email: "",
        budget: "",
        message: "",
      });

    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h1>LeadDesk Mini</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          required
        >
          <option value="">Select Budget</option>
          <option>Below 10000</option>
          <option>10000-50000</option>
          <option>Above 50000</option>
        </select>

        <br /><br />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

      <br />

      <footer>
        Built for Digital Heroes Training Task |
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
        >
          Digital Heroes
        </a>
      </footer>

    </div>
  );
}

export default Home;