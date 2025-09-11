import React, { useState } from "react";
import Input from "./SearchBar";
// import Square from "./Square";
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
        <Input text="Tag" value={form.tag} onChange={handleChange} />
        <Input text="Title" value={form.title} onChange={handleChange} />
        <Input text="Url" value={form.url} onChange={handleChange} />
        <Input
          text="Description"
          value={form.description}
          onChange={handleChange}
        />
        <button className="btn btn-green" onClick={saveLink}>
          {editId !== null ? "Update" : "Save"}
        </button>
      </div>
      {/* Only render the table if at least one link exists */}
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
// import React, { useState } from "react";
// import input from "./Input";

// const Input = ({ text, value, onChange, placeholder }) => {
//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         {text}
//       </label>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder || `Enter ${text.toLowerCase()}`}
//         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//       />
//     </div>
//   );
// };

// const BookmarkCard = ({
//   bookmark,
//   onEdit,
//   onDelete,
//   onUpdate,
//   onCancelEdit,
//   editingId,
// }) => {
//   const [editData, setEditData] = useState(bookmark);
//   const isEditing = editingId === bookmark.id;

//   const handleSaveEdit = () => {
//     onUpdate(bookmark.id, editData);
//   };

//   if (isEditing) {
//     return (
//       <div className="bg-white border border-blue-300 rounded-lg p-4 shadow-md">
//         <div className="space-y-3">
//           <Input
//             text="Tag"
//             value={editData.tag}
//             onChange={(value) =>
//               setEditData((prev) => ({ ...prev, tag: value }))
//             }
//           />
//           <Input
//             text="Title"
//             value={editData.title}
//             onChange={(value) =>
//               setEditData((prev) => ({ ...prev, title: value }))
//             }
//           />
//           <Input
//             text="Link"
//             value={editData.link}
//             onChange={(value) =>
//               setEditData((prev) => ({ ...prev, link: value }))
//             }
//           />
//           <Input
//             text="Description"
//             value={editData.description}
//             onChange={(value) =>
//               setEditData((prev) => ({ ...prev, description: value }))
//             }
//           />
//         </div>
//         <div className="flex gap-2 mt-4">
//           <button
//             onClick={handleSaveEdit}
//             className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
//           >
//             <Save size={14} />
//             Save
//           </button>
//           <button
//             onClick={onCancelEdit}
//             className="flex items-center gap-1 px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
//           >
//             <X size={14} />
//             Cancel
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
//       <div className="flex justify-between items-start mb-3">
//         <div className="flex-1">
//           <div className="flex items-center gap-2 mb-2">
//             <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
//               {bookmark.tag}
//             </span>
//             <span className="text-xs text-gray-500">
//               {new Date(bookmark.createdAt).toLocaleDateString()}
//             </span>
//           </div>
//           <h3 className="font-semibold text-lg text-gray-800 mb-1">
//             {bookmark.title}
//           </h3>
//           <a
//             href={bookmark.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline text-sm break-all block mb-2"
//           >
//             {bookmark.link}
//           </a>
//           <p className="text-gray-600 text-sm">{bookmark.description}</p>
//         </div>
//         <div className="flex gap-1 ml-3">
//           <button
//             onClick={() => onEdit(bookmark.id)}
//             className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded"
//             title="Edit bookmark"
//           >
//             <Edit size={16} />
//           </button>
//           <button
//             onClick={() => onDelete(bookmark.id)}
//             className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded"
//             title="Delete bookmark"
//           >
//             <Trash2 size={16} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function BookmarkManager() {
//   const [bookmarks, setBookmarks] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({
//     tag: "",
//     title: "",
//     link: "",
//     description: "",
//   });

//   const handleInputChange = (field) => (value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSave = () => {
//     if (!formData.title.trim() || !formData.link.trim()) {
//       alert("Please enter at least a title and link");
//       return;
//     }

//     const newBookmark = {
//       id: Date.now(),
//       ...formData,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     };

//     setBookmarks((prev) => [newBookmark, ...prev]);
//     handleClear();
//     alert("Bookmark saved successfully!");
//   };

//   const handleClear = () => {
//     setFormData({
//       tag: "",
//       title: "",
//       link: "",
//       description: "",
//     });
//   };

//   const handleEdit = (id) => {
//     setEditingId(id);
//   };

//   const handleCancelEdit = () => {
//     setEditingId(null);
//   };

//   const handleUpdate = (id, updatedData) => {
//     setBookmarks((prev) =>
//       prev.map((bookmark) =>
//         bookmark.id === id
//           ? { ...bookmark, ...updatedData, updatedAt: new Date().toISOString() }
//           : bookmark
//       )
//     );
//     setEditingId(null);
//     alert("Bookmark updated successfully!");
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this bookmark?")) {
//       setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== id));
//       alert("Bookmark deleted successfully!");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Add New Bookmark Form */}
//       <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//         <div className="flex items-center gap-2 mb-6">
//           <Plus size={24} className="text-blue-600" />
//           <h2 className="text-2xl font-bold text-gray-800">Add New Bookmark</h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-4">
//           <Input
//             text="Tag"
//             value={formData.tag}
//             onChange={handleInputChange("tag")}
//             placeholder="e.g., work, personal, learning"
//           />
//           <Input
//             text="Title"
//             value={formData.title}
//             onChange={handleInputChange("title")}
//             placeholder="Bookmark title"
//           />
//         </div>
//         <Input
//           text="Link"
//           value={formData.link}
//           onChange={handleInputChange("link")}
//           placeholder="https://example.com"
//         />
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Description
//           </label>
//           <textarea
//             value={formData.description}
//             onChange={(e) => handleInputChange("description")(e.target.value)}
//             placeholder="Brief description of the bookmark"
//             rows="3"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div className="flex gap-3">
//           <button
//             onClick={handleSave}
//             className="flex items-center gap-2 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//           >
//             <Save size={16} />
//             Save Bookmark
//           </button>
//           <button
//             onClick={handleClear}
//             className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
//           >
//             Clear
//           </button>
//         </div>
//       </div>

//       {/* Bookmarks List */}
//       <div>
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-xl font-bold text-gray-800">
//             My Bookmarks ({bookmarks.length})
//           </h3>
//           {bookmarks.length > 0 && (
//             <div className="text-sm text-gray-500">
//               Click edit icon to modify, trash to delete
//             </div>
//           )}
//         </div>

//         {bookmarks.length === 0 ? (
//           <div className="text-center py-12 bg-gray-50 rounded-lg">
//             <div className="text-gray-400 text-lg mb-2">No bookmarks yet</div>
//             <div className="text-gray-500 text-sm">
//               Add your first bookmark using the form above
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {bookmarks.map((bookmark) => (
//               <BookmarkCard
//                 key={bookmark.id}
//                 bookmark={bookmark}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onUpdate={handleUpdate}
//                 onCancelEdit={handleCancelEdit}
//                 editingId={editingId}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
