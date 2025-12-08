import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsProps {
  className?: string;
}

const GatherRequirements: React.FC<GatherRequirementsProps> = ({ className }) => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('https://api.example.com/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements. Please try again later.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  return (
    <div className={clsx(className, 'gather-requirements', { 'desktop-view': isDesktop })}>
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      <ul className="list-disc pl-5">
        {loading ? (
          <li className="animate-pulse bg-gray-200 h-4 w-1/3 rounded"></li>
        ) : error ? (
          <li>{error}</li>
        ) : (
          requirements.map((requirement) => (
            <li key={requirement.id} className="flex items-center">
              <input
                type="checkbox"
                id={`requirement-${requirement.id}`}
                className="mr-2"
                aria-label={`Essential requirement ${requirement.name}`}
              />
              <label htmlFor={`requirement-${requirement.id}`} className="cursor-pointer">
                {`${requirement.isEssential ? 'Essential: ' : ''}${requirement.description}`}
              </label>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsProps {
  className?: string;
}

const GatherRequirements: React.FC<GatherRequirementsProps> = ({ className }) => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('https://api.example.com/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements. Please try again later.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  return (
    <div className={clsx(className, 'gather-requirements', { 'desktop-view': isDesktop })}>
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      <ul className="list-disc pl-5">
        {loading ? (
          <li className="animate-pulse bg-gray-200 h-4 w-1/3 rounded"></li>
        ) : error ? (
          <li>{error}</li>
        ) : (
          requirements.map((requirement) => (
            <li key={requirement.id} className="flex items-center">
              <input
                type="checkbox"
                id={`requirement-${requirement.id}`}
                className="mr-2"
                aria-label={`Essential requirement ${requirement.name}`}
              />
              <label htmlFor={`requirement-${requirement.id}`} className="cursor-pointer">
                {`${requirement.isEssential ? 'Essential: ' : ''}${requirement.description}`}
              </label>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default GatherRequirements;