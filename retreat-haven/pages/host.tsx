import { useState } from 'react';

export default function Host() {
  const [form, setForm] = useState({ title: '', location: '', date: '', description: '', imageUrl: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/retreats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert('Retreat created successfully!');
      setForm({ title: '', location: '', date: '', description: '', imageUrl: '' });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Host Your Retreat</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded" name="title" value={form.title} onChange={handleChange} placeholder="Retreat Title" required />
        <input className="w-full p-2 border rounded" name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
        <input className="w-full p-2 border rounded" name="date" value={form.date} onChange={handleChange} placeholder="Available Dates" required />
        <textarea className="w-full p-2 border rounded" name="description" value={form.description} onChange={handleChange} placeholder="Retreat Description" rows={4} required />
        <input className="w-full p-2 border rounded" name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" required />
        <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Submit Retreat</button>
      </form>
    </div>
  );
}
