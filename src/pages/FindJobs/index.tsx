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
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    (async () => {
      const { data } = await axiosinstance.get<Job[]>('/jobs');
      setJobs(data);
    })();
  }, []);
  const handleSearch = async () => {
    setIsSearching(true);
    try {
      const { data } = await axiosinstance.get<Job[]>('/jobs', {
        params: { title: keyword, location },
      });
      setJobs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSearching(false);
    }
  };
  return (
    <div className='find-jobs'>
      <div className='search'>
        <input
          placeholder='Keyword'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className='keyword'
        />
        <input
          placeholder='Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='location'
        />
        <button
          disabled={isSearching}
          onClick={handleSearch}
          className='search-button'
        >
          search
        </button>
      </div>
      {jobs && (
        <div className='jobs'>
          {jobs.map((job) => (
            <div key={job.id}>
              <Card {...job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindJobs;
