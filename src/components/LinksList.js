import React, { useState, useEffect } from 'react';
import { loadData, apiBase } from '../utils';
import { Wrapper, SubTitle } from '../layout';

const LinksList = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `${apiBase}/links/all`;
      const links = await loadData(url);
      setLinks(links);
    })();
  }, []);

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
