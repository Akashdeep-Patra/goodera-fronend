import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import './FindJobs.style.scss';

export interface Job {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
  publication_date: string;
  location: string;
  level: string;
  tags: string[];
  company: Company;
}

export interface Company {
  id: number;
  short_name: string;
  name: string;
}

const axiosinstance = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

const FindJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axiosinstance.get<Job[]>('/jobs');
      setJobs(data);
    })();
  }, []);

  return (
    <div className='find-jobs'>
      {jobs && (
        <div className='jobs'>
          {jobs.map((job) => (
            <div>
              <Card key={job.id} {...job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindJobs;
