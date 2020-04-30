import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { loadData } from '../utils';

const TopicSelect = Styled.select`
    display: inline-block;
`;

const TopicList = (props) => {
  const apiBase = `http://localhost:3000/v1`;
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `${apiBase}/topics/all`;
      const topics = await loadData(url);
      setTopics(topics);
    })();
  }, [apiBase]);

  return (
    <TopicSelect onChange={props.onChange}>
      {topics.map((topic) => (
        <option value={topic.id} key={topic.id}>
          {topic.title}
        </option>
      ))}
    </TopicSelect>
  );
};

export default TopicList;
