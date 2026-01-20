import { useState } from "react";
import { useMarkets } from "../../hooks/useMarkets";

const CreateMarketForm = () => {
  const { createMarket } = useMarkets();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    endTime: "",
    options: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createMarket({
      ...form,
      options: form.options.split(",").map((o) => o.trim()),
    });

    alert("Market created");
    setForm({
      title: "",
      description: "",
      category: "",
      endTime: "",
      options: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <br />

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        required
      />
      <br />

      <input
        name="category"
        placeholder="Category"
        onChange={handleChange}
      />
      <br />

      <input
        type="datetime-local"
        name="endTime"
        onChange={handleChange}
        required
      />
      <br />

      <input
        name="options"
        placeholder="Options (comma separated)"
        onChange={handleChange}
        required
      />
      <br />

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateMarketForm;
