import React, { useState, useEffect } from 'react';
import { loadData, apiBase } from '../utils';
import SelectInput from '../inputs/Select';

const AddLink = () => {
  const [topics, setTopics] = useState([]);
  const [input, setInput] = useState({});

  useEffect(() => {
    (async () => {
      const url = `${apiBase}/topics/all`;
      const topics = await loadData(url);
      setTopics(topics);
    })();
  }, []);

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { link_title, link_source, topic_id } = input;
    addLink({ title: link_title, link: link_source, topic_id });
  };

  const addLink = async (data) => {
    console.log('data is', data);
    const response = await fetch(`${apiBase}/link/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const reply = await response;
    if (reply.status === 200) {
      alert('Comment Saved!');
    }
    if (reply.status !== 200) {
      alert('womp womp');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Link Name
        <input
          type="text"
          name="link_title"
          placeholder="Link Title"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Link Source
        <input
          type="text"
          name="link_source"
          placeholder="Link Source"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Link Topic
        <SelectInput
          name="topic_id"
          onChange={handleInputChange}
          data={topics}
        />
      </label>
      <button type="submit">Save Link</button>
    </form>
  );
};

export default AddLink;
