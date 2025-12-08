import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    optional?: boolean;
  }>;
}

interface GatherRequirementsFormValues {
  requirementTitle: string;
  requirementDescription: string;
  requirementName: string;
  requirementType: string;
  isRequirementOptional: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = (data) => {
    setRequirements([
      ...requirements,
      {
        title: data.requirementTitle,
        description: data.requirementDescription,
        requirements: [
          {
            name: data.requirementName,
            type: data.requirementType,
            optional: data.isRequirementOptional
          }
        ]
      }
    ]);
    reset();
  };

  const removeRequirement = (index: number) => {
    setRequirements((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className={twMerge('text-xl font-bold mb-4', 'text-center')}>Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="requirementTitle" className="block text-sm font-medium">Requirement Title:</label>
          <input
            type="text"
            id="requirementTitle"
            {...register('requirementTitle', { required: true })}
            className={twMerge('mt-1 block w-full rounded-md shadow-sm', 'focus:border-blue-500 focus:ring-blue-500')}
          />
        </div>
        <div>
          <label htmlFor="requirementDescription" className="block text-sm font-medium">Requirement Description:</label>
          <textarea
            id="requirementDescription"
            {...register('requirementDescription')}
            rows={3}
            className={twMerge('mt-1 block w-full rounded-md shadow-sm', 'focus:border-blue-500 focus:ring-blue-500')}
          />
        </div>
        <div>
          <label htmlFor="requirementName" className="block text-sm font-medium">Requirement Name:</label>
          <input
            type="text"
            id="requirementName"
            {...register('requirementName', { required: true })}
            className={twMerge('mt-1 block w-full rounded-md shadow-sm', 'focus:border-blue-500 focus:ring-blue-500')}
          />
        </div>
        <div>
          <label htmlFor="requirementType" className="block text-sm font-medium">Requirement Type:</label>
          <input
            type="text"
            id="requirementType"
            {...register('requirementType', { required: true })}
            className={twMerge('mt-1 block w-full rounded-md shadow-sm', 'focus:border-blue-500 focus:ring-blue-500')}
          />
        </div>
        <div>
          <label htmlFor="isRequirementOptional" className="block text-sm font-medium">Is Requirement Optional?</label>
          <input
            type="checkbox"
            id="isRequirementOptional"
            {...register('isRequirementOptional', { required: false })}
            className={twMerge('mt-1 w-4 h-4 rounded focus:ring-blue-500')}
          />
        </div>
        <button type="submit" className={twMerge('w-full inline-flex justify-center py-2 px-4 border border-transparent', 'shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500')}>
          Add Requirement
        </button>
      </form>

      <div className="mt-4">
        {requirements.map((requirement, index) => (
          <div key={index} className="border p-3 mb-3 rounded-md shadow-sm bg-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">{requirement.title}</h2>
              {requirement.description && <p>{requirement.description}</p>}
              <ul>
                {requirement.requirements.map((req, reqIndex) => (
                  <li key={reqIndex} className="flex items-center">
                    <span className="mr-1 font-medium">{req.name}: </span>
                    <span className="font-normal">{req.type}</span>
                    {req.optional && <span> (Optional)</span>}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={() => removeRequirement(index)} type="button" className={twMerge('p-1 rounded', 'bg-red-500 text-white hover:bg-red-600 focus:outline-none')}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  title: string;
  description?: string;
  requirements: Array<{
    name: string;
    type: string;
    optional?: boolean;
  }>;
}

interface GatherRequirementsFormValues {
  requirementTitle: string;
  requirementDescription: string;
  requirementName: string;
  requirementType: string;
  isRequirementOptional: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<IRequirement[]>([]);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = (data) => {
    setRequirements([
      ...requirements,
      {
        title: data.requirementTitle,
        description: data.requirementDescription,
        requirements: [
          {
            name: data.requirementName,
            type: data.requirementType,
            optional: data.isRequirementOptional
          }
        ]
      }
    ]);
    reset();
  };

  const removeRequirement = (index: number) => {
    setRequirements((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className={twMerge('text-xl font-bold mb-4', 'text-center')}>Gather Requirements</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="requirementTitle" className="block text-sm font-medium">Requirement Title:</label>
          <input
            type="text"
            id="requirementTitle"
            {...register('requirementTitle', { required: true })}
            className={twMerge('mt-1 block w-full rounded-md shadow-sm', 'focus:border-blue-500 focus:ring-blue-500')}
          />
        </div>
        <div>
          <label htmlFor="requirementDescription" className="block text-sm font-medium">Requirement Description:</label>
          <textarea
            id="requirementDescription"
            {...register('requirementDescription')}
            rows={3}
            className={twMerge('mt-1 block w-full rounded-md shadow-sm', 'focus:border-blue-500 focus:ring-blue-500')}
          />
        </div>
        <div>
          <label htmlFor="requirementName" className="block text-sm font-medium">Requirement Name:</label>
          <input
            type="text"
            id="requirementName"
            {...register('requirementName', { required: true })}
            className={twMerge('mt-1 block w-full rounded-md shadow-sm', 'focus:border-blue-500 focus:ring-blue-500')}
          />
        </div>
        <div>
          <label htmlFor="requirementType" className="block text-sm font-medium">Requirement Type:</label>
          <input
            type="text"
            id="requirementType"
            {...register('requirementType', { required: true })}
            className={twMerge('mt-1 block w-full rounded-md shadow-sm', 'focus:border-blue-500 focus:ring-blue-500')}
          />
        </div>
        <div>
          <label htmlFor="isRequirementOptional" className="block text-sm font-medium">Is Requirement Optional?</label>
          <input
            type="checkbox"
            id="isRequirementOptional"
            {...register('isRequirementOptional', { required: false })}
            className={twMerge('mt-1 w-4 h-4 rounded focus:ring-blue-500')}
          />
        </div>
        <button type="submit" className={twMerge('w-full inline-flex justify-center py-2 px-4 border border-transparent', 'shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500')}>
          Add Requirement
        </button>
      </form>

      <div className="mt-4">
        {requirements.map((requirement, index) => (
          <div key={index} className="border p-3 mb-3 rounded-md shadow-sm bg-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">{requirement.title}</h2>
              {requirement.description && <p>{requirement.description}</p>}
              <ul>
                {requirement.requirements.map((req, reqIndex) => (
                  <li key={reqIndex} className="flex items-center">
                    <span className="mr-1 font-medium">{req.name}: </span>
                    <span className="font-normal">{req.type}</span>
                    {req.optional && <span> (Optional)</span>}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={() => removeRequirement(index)} type="button" className={twMerge('p-1 rounded', 'bg-red-500 text-white hover:bg-red-600 focus:outline-none')}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatherRequirements;