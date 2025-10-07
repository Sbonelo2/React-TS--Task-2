import React, { useState, useEffect } from "react";
import Input from "./Input";

interface LinkItem {
  id: number;
  tag: string;
  title: string;
  url: string;
  description: string;
}

interface TableProps {
  search: string;
}

export default function Table({ search }: TableProps) {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [form, setForm] = useState({
    tag: "",
    title: "",
    url: "",
    description: "",
  });
  const [editId, setEditId] = useState<number | null>(null);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("links");
    if (stored) setLinks(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever links change
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

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

  // Filter links based on search term
  const filteredLinks = links.filter((link) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      link.tag.toLowerCase().includes(searchLower) ||
      link.title.toLowerCase().includes(searchLower) ||
      link.url.toLowerCase().includes(searchLower) ||
      link.description.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="links-table-container">
      <h2>Links Vault</h2>
      {search && (
        <div style={{ 
          padding: "0.75rem 1rem", 
          backgroundColor: "#e3f2fd", 
          borderRadius: "8px",
          marginBottom: "1rem",
          border: "1px solid #2196F3",
          color: "#1565c0",
          fontWeight: "600"
        }}>
          🔍 Searching for: "{search}" - Found {filteredLinks.length} result{filteredLinks.length !== 1 ? 's' : ''}
        </div>
      )}
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

      {filteredLinks.length > 0 ? (
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
            {filteredLinks.map((link) => (
              <tr key={link.id}>
                <td>
                  <span className="tag">{link.tag}</span>
                </td>
                <td className="link-title">{link.title}</td>
                <td>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="external-link"
                    title={link.url}
                  >
                    🔗 Visit Link
                  </a>
                </td>
                <td className="link-description" title={link.description}>
                  {link.description}
                </td>
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
      ) : (
        search && links.length > 0 && (
          <div style={{
            padding: "3rem",
            textAlign: "center",
            backgroundColor: "#fff3cd",
            borderRadius: "8px",
            border: "1px solid #ffc107",
            color: "#856404"
          }}>
            <h3 style={{ marginBottom: "0.5rem" }}>❌ No results found</h3>
            <p>No links match your search "{search}". Try a different search term.</p>
          </div>
        )
      )}
    </div>
  );
}
