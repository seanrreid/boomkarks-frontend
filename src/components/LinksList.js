import React, { useState, useEffect } from 'react';
import { loadData } from '../utils';
import { Wrapper, SubTitle } from '../layout';

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
      <SubTitle>List of Links</SubTitle>
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default LinksList;
