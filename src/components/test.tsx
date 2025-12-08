import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      setError('Title and description are required');
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post<Test>('https://api.example.com/tests', { title, description });
      router.push(`/tests/${response.data.id}`);
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'Failed to create test');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-bold">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter test title..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            aria-label="Test Title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 font-bold">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter test description..."
            rows={5}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            aria-label="Test Description"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-500'} text-white font-bold rounded-lg hover:bg-blue-600`}
          aria-label="Create Test Button"
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      setError('Title and description are required');
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post<Test>('https://api.example.com/tests', { title, description });
      router.push(`/tests/${response.data.id}`);
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'Failed to create test');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-bold">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter test title..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            aria-label="Test Title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 font-bold">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter test description..."
            rows={5}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            aria-label="Test Description"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-500'} text-white font-bold rounded-lg hover:bg-blue-600`}
          aria-label="Create Test Button"
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;