import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

interface LoadingState {
  loading: boolean;
  error?: string | null;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>({ loading: true });
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get('https://api.example.com/business-spec');
        setBusinessSpec(response.data);
        setLoadingState({ loading: false });
      } catch (error) {
        console.error("Failed to load business specification:", error);
        setLoadingState({ loading: true, error: "An error occurred while fetching the data." });
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loadingState.loading && !businessSpec) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (loadingState.error) {
    return (
      <div className="flex flex-col items-center">
        <p>Error: {loadingState.error}</p>
        <button onClick={() => setLoadingState({ loading: true })}>Retry</button>
      </div>
    );
  }

  const renderRequirement = ({ id, title, details }: Requirement) => (
    <div key={id} className="mb-4">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: details }} />
    </div>
  );

  return (
    <div className={clsx('container mx-auto p-6', isMobile && 'max-w-sm')}>
      {businessSpec && (
        <>
          <h1 className="text-2xl font-bold mb-4">{businessSpec.name}</h1>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: businessSpec.description }} />
          <div className="space-y-6">
            {businessSpec.requirements.map(renderRequirement)}
          </div>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

interface LoadingState {
  loading: boolean;
  error?: string | null;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>({ loading: true });
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get('https://api.example.com/business-spec');
        setBusinessSpec(response.data);
        setLoadingState({ loading: false });
      } catch (error) {
        console.error("Failed to load business specification:", error);
        setLoadingState({ loading: true, error: "An error occurred while fetching the data." });
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loadingState.loading && !businessSpec) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (loadingState.error) {
    return (
      <div className="flex flex-col items-center">
        <p>Error: {loadingState.error}</p>
        <button onClick={() => setLoadingState({ loading: true })}>Retry</button>
      </div>
    );
  }

  const renderRequirement = ({ id, title, details }: Requirement) => (
    <div key={id} className="mb-4">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: details }} />
    </div>
  );

  return (
    <div className={clsx('container mx-auto p-6', isMobile && 'max-w-sm')}>
      {businessSpec && (
        <>
          <h1 className="text-2xl font-bold mb-4">{businessSpec.name}</h1>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: businessSpec.description }} />
          <div className="space-y-6">
            {businessSpec.requirements.map(renderRequirement)}
          </div>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;