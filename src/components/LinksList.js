import React, { useState, useEffect } from 'react';
import { loadData } from '../utils';
import { Wrapper } from '../layout';
import TopicList from './TopicList';

const LinksList = () => {
  const apiBase = `http://localhost:3000/v1`;
  const [links, setLinks] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `${apiBase}/links/all`;
      const links = await loadData(url);
      setLinks(links);
    })();
  }, [apiBase]);

  return (
    <Wrapper>
      <h2>List of Links</h2>
      <ul>
        <li>
          Dummy <TopicList />
        </li>
        {links.map((link) => (
          <li>
            {link.title} <TopicList />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default LinksList;
