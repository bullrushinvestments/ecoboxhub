import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    contentTypes: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data or perform any initialization logic
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({
      ...specification,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with actual API endpoint
      const response = await axios.post('/api/business/specifications', specification);
      setSpecification(response.data); // Assuming the server returns updated data
    } catch (err) {
      setError('Failed to create business specification.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <div className={clsx(isMobile ? 'mb-2' : 'mb-6', 'w-full')}>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={specification.name}
          onChange={handleInputChange}
          required
          aria-required="true"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className={clsx(isMobile ? 'mb-2' : 'mb-6', 'w-full')}>
        <label htmlFor="description" className="block mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          value={specification.description}
          onChange={handleInputChange}
          required
          aria-required="true"
          rows={4}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className={clsx(isMobile ? 'mb-2' : 'mb-6', 'w-full')}>
        <label htmlFor="contentTypes" className="block mb-1">Content Types</label>
        <input
          type="text"
          id="contentTypes"
          name="contentTypes"
          value={specification.contentTypes.join(',')}
          onChange={(e) => setSpecification({
            ...specification,
            contentTypes: e.target.value.split(',').map(str => str.trim()),
          })}
          required
          aria-required="true"
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" disabled={loading} className="bg-blue-500 text-white py-2 px-4 rounded">
        {loading ? 'Creating...' : 'Create Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    contentTypes: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data or perform any initialization logic
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({
      ...specification,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with actual API endpoint
      const response = await axios.post('/api/business/specifications', specification);
      setSpecification(response.data); // Assuming the server returns updated data
    } catch (err) {
      setError('Failed to create business specification.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <div className={clsx(isMobile ? 'mb-2' : 'mb-6', 'w-full')}>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={specification.name}
          onChange={handleInputChange}
          required
          aria-required="true"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className={clsx(isMobile ? 'mb-2' : 'mb-6', 'w-full')}>
        <label htmlFor="description" className="block mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          value={specification.description}
          onChange={handleInputChange}
          required
          aria-required="true"
          rows={4}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className={clsx(isMobile ? 'mb-2' : 'mb-6', 'w-full')}>
        <label htmlFor="contentTypes" className="block mb-1">Content Types</label>
        <input
          type="text"
          id="contentTypes"
          name="contentTypes"
          value={specification.contentTypes.join(',')}
          onChange={(e) => setSpecification({
            ...specification,
            contentTypes: e.target.value.split(',').map(str => str.trim()),
          })}
          required
          aria-required="true"
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" disabled={loading} className="bg-blue-500 text-white py-2 px-4 rounded">
        {loading ? 'Creating...' : 'Create Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;