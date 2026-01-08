import { useState, useEffect } from "react";
import Input from "./Input";
import { FaSortAmountDown, FaSortAmountUp, FaChartBar, FaTimes, FaFilter } from "react-icons/fa";

interface LinkItem {
  id: number;
  tag: string;
  title: string;
  url: string;
  description: string;
  createdAt: string;
  category: string;
  favicon?: string;
}

interface TableProps {
  search: string;
}

type SortField = 'title' | 'tag' | 'createdAt' | 'category';
type SortOrder = 'asc' | 'desc';

const CATEGORIES = [
  { name: 'Work', color: '#1a202c' },
  { name: 'Personal', color: '#1a202c' },
  { name: 'Learning', color: '#1a202c' },
  { name: 'Entertainment', color: '#1a202c' },
  { name: 'Social', color: '#1a202c' },
  { name: 'Other', color: '#1a202c' },
];

export default function AdvancedTable({ search }: TableProps) {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [form, setForm] = useState({
    tag: "",
    title: "",
    url: "",
    description: "",
    category: "Other",
  });
  const [editId, setEditId] = useState<number | null>(null);
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showStats, setShowStats] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("links");
    if (stored) {
      const parsedLinks = JSON.parse(stored);
      // Migrate old data without category
      const migratedLinks = parsedLinks.map((link: any) => ({
        ...link,
        category: link.category || 'Other',
        createdAt: link.createdAt || new Date().toISOString(),
      }));
      setLinks(migratedLinks);
    }
  }, []);

  // Save to localStorage whenever links change
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const getFaviconUrl = (url: string): string => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
    } catch {
      return '';
    }
  };

  const saveLink = () => {
    if (!form.title || !form.url) {
      alert('Please fill in at least Title and URL fields');
      return;
    }

    // Validate URL
    if (form.url && !isValidUrl(form.url)) {
      alert('Please enter a valid URL (e.g., https://example.com)');
      return;
    }

    if (editId !== null) {
      setLinks((prev) =>
        prev.map((l) => (l.id === editId ? { ...l, ...form } : l))
      );
      setEditId(null);
    } else {
      const newLink: LinkItem = {
        id: Date.now(),
        ...form,
        createdAt: new Date().toISOString(),
        favicon: getFaviconUrl(form.url),
      };
      setLinks((prev) => [...prev, newLink]);
    }
    setForm({ tag: "", title: "", url: "", description: "", category: "Other" });
  };

  const editLink = (id: number) => {
    const link = links.find((l) => l.id === id);
    if (!link) return;
    setForm({
      tag: link.tag,
      title: link.title,
      url: link.url,
      description: link.description,
      category: link.category || 'Other',
    });
    setEditId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteLink = (id: number) => {
    if (window.confirm('Are you sure you want to delete this link?')) {
      setLinks((prev) => prev.filter((l) => l.id !== id));
    }
  };


  // Toggle sort
  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Sort links
  const sortedLinks = [...links].sort((a, b) => {
    let aVal: string | number = a[sortField];
    let bVal: string | number = b[sortField];
    
    if (sortField === 'createdAt') {
      aVal = new Date(aVal).getTime();
      bVal = new Date(bVal).getTime();
    } else {
      aVal = String(aVal).toLowerCase();
      bVal = String(bVal).toLowerCase();
    }
    
    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  // Filter links based on search term and category
  const filteredLinks = sortedLinks.filter((link) => {
    const matchesSearch = !search || [
      link.tag,
      link.title,
      link.url,
      link.description,
      link.category
    ].some(field => field.toLowerCase().includes(search.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || link.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate statistics
  const stats = {
    total: links.length,
    byCategory: CATEGORIES.map(cat => ({
      name: cat.name,
      count: links.filter(l => l.category === cat.name).length,
      color: cat.color
    })),
    recentlyAdded: links.filter(l => {
      const daysDiff = (Date.now() - new Date(l.createdAt).getTime()) / (1000 * 60 * 60 * 24);
      return daysDiff <= 7;
    }).length,
  };

  const getCategoryColor = (categoryName: string) => {
    return CATEGORIES.find(c => c.name === categoryName)?.color || '#6b7280';
  };

  return (
    <div className="links-table-container">
      {/* Header with controls */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h2 style={{ margin: 0, color: '#1a202c', fontSize: '2rem', fontWeight: '800' }}>🔗 Links Vault</h2>
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => setShowStats(!showStats)}
            title="Toggle Statistics"
          >
            <FaChartBar /> Stats
          </button>
        </div>
      </div>

      {/* Statistics Panel */}
      {showStats && (
        <div style={{
          backgroundColor: '#f7fafc',
          padding: '2rem',
          borderRadius: '16px',
          marginBottom: '2rem',
          border: '2px solid #e2e8f0',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1a202c', fontSize: '1.25rem', fontWeight: '700' }}>
            <FaChartBar /> Statistics Dashboard
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ 
              padding: '1rem', 
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a202c' }}>{stats.total}</div>
              <div style={{ color: '#4a5568', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Links</div>
            </div>
            
            <div style={{ 
              padding: '1rem', 
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{stats.recentlyAdded}</div>
              <div style={{ color: '#4a5568' }}>Added This Week</div>
            </div>
            
            {stats.byCategory.filter(c => c.count > 0).map(cat => (
              <div key={cat.name} style={{ 
                padding: '1rem', 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: cat.color }}>{cat.count}</div>
                <div style={{ color: '#4a5568' }}>{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filter Info */}
      {(search || selectedCategory !== 'All') && (
        <div style={{ 
          padding: '1rem 1.5rem', 
          backgroundColor: '#f7fafc',
          borderRadius: '12px',
          marginBottom: '1.5rem',
          border: '2px solid #e2e8f0',
          color: '#1a202c',
          fontWeight: '600',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
          <span>
            🔍 {search && `Searching: "${search}"`} 
            {search && selectedCategory !== 'All' && ' | '}
            {selectedCategory !== 'All' && `Category: ${selectedCategory}`}
            {' - '}Found {filteredLinks.length} result{filteredLinks.length !== 1 ? 's' : ''}
          </span>
          {selectedCategory !== 'All' && (
            <button 
              onClick={() => setSelectedCategory('All')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
              title="Clear filter"
            >
              <FaTimes />
            </button>
          )}
        </div>
      )}

      {/* Category Filter */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <FaFilter style={{ color: '#4a5568' }} />
        <button
          onClick={() => setSelectedCategory('All')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            backgroundColor: selectedCategory === 'All' ? '#1a202c' : '#e2e8f0',
            color: selectedCategory === 'All' ? '#ffffff' : '#1a202c',
          }}
        >
          All ({links.length})
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              backgroundColor: selectedCategory === cat.name ? cat.color : '#e2e8f0',
              color: selectedCategory === cat.name ? '#ffffff' : '#1a202c',
            }}
          >
            {cat.name} ({links.filter(l => l.category === cat.name).length})
          </button>
        ))}
      </div>

      {/* Form Section */}
      <div className="form-section">
        <h3 style={{ marginBottom: '1.5rem', color: '#1a202c', fontSize: '1.5rem', fontWeight: '700' }}>
          {editId !== null ? '✏️ Edit Link' : '➕ Add New Link'}
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <Input name="tag" text="Tag" value={form.tag} onChange={handleChange} />
          <Input name="title" text="Title *" value={form.title} onChange={handleChange} />
          <Input name="url" text="URL *" value={form.url} onChange={handleChange} />
          <div className="input-group">
            <label className="input-label">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="input-field"
              style={{ 
                backgroundColor: '#ffffff',
                color: '#1a202c'
              }}
            >
              {CATEGORIES.map(cat => (
                <option key={cat.name} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <Input 
            name="description" 
            text="Description" 
            value={form.description} 
            onChange={handleChange} 
          />
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <button className="btn btn-green" onClick={saveLink}>
            {editId !== null ? '💾 Update Link' : '➕ Save Link'}
          </button>
          {editId !== null && (
            <button 
              className="btn btn-secondary" 
              onClick={() => {
                setEditId(null);
                setForm({ tag: "", title: "", url: "", description: "", category: "Other" });
              }}
            >
              ✖️ Cancel
            </button>
          )}
        </div>
      </div>

      {/* Links Table */}
      {filteredLinks.length > 0 ? (
        <div style={{ overflowX: 'auto' }}>
          <table className="links-table">
            <thead>
              <tr>
                <th>Favicon</th>
                <th 
                  onClick={() => toggleSort('tag')}
                  style={{ cursor: 'pointer' }}
                >
                  Tag {sortField === 'tag' && (sortOrder === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                </th>
                <th 
                  onClick={() => toggleSort('title')}
                  style={{ cursor: 'pointer' }}
                >
                  Title {sortField === 'title' && (sortOrder === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                </th>
                <th>Link</th>
                <th>Description</th>
                <th 
                  onClick={() => toggleSort('category')}
                  style={{ cursor: 'pointer' }}
                >
                  Category {sortField === 'category' && (sortOrder === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                </th>
                <th 
                  onClick={() => toggleSort('createdAt')}
                  style={{ cursor: 'pointer' }}
                >
                  Created {sortField === 'createdAt' && (sortOrder === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLinks.map((link) => (
                <tr key={link.id}>
                  <td>
                    {link.favicon && (
                      <img 
                        src={link.favicon} 
                        alt="" 
                        style={{ width: '24px', height: '24px' }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    )}
                  </td>
                  <td>
                    {link.tag && <span className="tag">{link.tag}</span>}
                  </td>
                  <td className="link-title">
                    {link.title}
                  </td>
                  <td>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="external-link"
                      title={link.url}
                    >
                      🔗 Visit
                    </a>
                  </td>
                  <td className="link-description" title={link.description}>
                    {link.description}
                  </td>
                  <td>
                    <span 
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: getCategoryColor(link.category),
                        color: 'white',
                        display: 'inline-block'
                      }}
                    >
                      {link.category}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.75rem' }}>
                    {new Date(link.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        className="btn btn-green"
                        onClick={() => editLink(link.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-red"
                        onClick={() => deleteLink(link.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{
          padding: '3rem',
          textAlign: 'center',
          backgroundColor: '#f7fafc',
          borderRadius: '16px',
          border: '2px solid #e2e8f0',
          color: '#1a202c',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
          {search || selectedCategory !== 'All' ? (
            <>
              <h3 style={{ marginBottom: '0.5rem' }}>❌ No results found</h3>
              <p>No links match your current filters. Try adjusting your search or category filter.</p>
            </>
          ) : (
            <>
              <h3 style={{ marginBottom: '0.5rem' }}>📭 No links yet</h3>
              <p>Start by adding your first link above!</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
