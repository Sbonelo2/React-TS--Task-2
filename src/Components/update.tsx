// import React, { useState } from "react";
// import Nav from "./NavBar";
// export default function Search({ data }) {
//   const [query, setQuery] = useState("");

//   // Filter by title, tag, or url
//   const filteredData = data.filter(
//     (item) =>
//       item.title.toLowerCase().includes(query.toLowerCase()) ||
//       item.tag.toLowerCase().includes(query.toLowerCase()) ||
//       item.url.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div style={{ color: "black" }}>
//       <input
//         type="text"
//         placeholder="Search by title, tag, or url"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         style={{
//           padding: "0.5rem",
//           borderRadius: "5px",
//           border: "1px solid #ccc",
//           width: "200px",
//         }}
//       />

//       {/* Results */}
//       {query && (
//         <ul
//           style={{
//             background: "white",
//             padding: "0.5rem",
//             marginTop: "0.5rem",
//             borderRadius: "5px",
//           }}
//         >
//           {filteredData.length > 0 ? (
//             filteredData.map((item, index) => (
//               <li key={index}>
//                 <a href={item.url} target="_blank" rel="noopener noreferrer">
//                   {item.title} ({item.tag})
//                 </a>
//               </li>
//             ))
//           ) : (
//             <li>No results found</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }
