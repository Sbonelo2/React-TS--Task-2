import React, { useState } from "react";
import Input from "./SearchBar"; 
import InpuTt from "./InpuTt";

interface LinkItem {
  id: number;
  tag: string;
  title: string;
  url: string;
  description: string;
}

export default function Table() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [form, setForm] = useState({
    tag: "",
    title: "",
    url: "",
    description: "",
  });
  const [editId, setEditId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveLink = () => {
    if (editId !== null) {
      setLinks((prev) =>
        prev.map((l) => (l.id === editId ? { ...l, ...form } : l))
      );
      setEditId(null);
    } else {
      setLinks((prev) => [...prev, { id: Date.now(), ...form }]);
    }
    setForm({ tag: "", title: "", url: "", description: "" });
  };

  const editLink = (id: number) => {
    const link = links.find((l) => l.id === id);
    if (!link) return;
    setForm({
      tag: link.tag,
      title: link.title,
      url: link.url,
      description: link.description,
    });
    setEditId(id);
  };

  const deleteLink = (id: number) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <div className="links-table-container">
      <h2>Links Vault</h2>

      <div className="form-section">
        <Input name="tag" text="Tag" value={form.tag} onChange={handleChange} />
        <Input
          name="title"
          text="Title"
          value={form.title}
          onChange={handleChange}
        />
        <Input name="url" text="Url" value={form.url} onChange={handleChange} />
        <Input
          name="description"
          text="Description"
          value={form.description}
          onChange={handleChange}
        />
        <button className="btn btn-green" onClick={saveLink}>
          {editId !== null ? "Update" : "Save"}
        </button>
      </div>

      {links.length > 0 && (
        <table className="links-table">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Title</th>
              <th>Link</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link) => (
              <tr key={link.id}>
                <td>{link.tag}</td>
                <td>{link.title}</td>
                <td>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.url}
                  </a>
                </td>
                <td>{link.description}</td>
                <td>
                  <button
                    className="btn btn-green"
                    onClick={() => editLink(link.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-red"
                    onClick={() => deleteLink(link.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
