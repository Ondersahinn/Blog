import React from 'react';
import { Select } from 'antd';
import { searchAllArticles } from '../../api/service/articleService';


class SubjectSelect extends React.Component {
  state = {
    selectedItems: [],
    OPTIONS : ['NodeJs', 'ReactJs', 'Mongoose', 'Socket.io'],
  };

  handleChange = selectedItems => {
    this.setState({ selectedItems });
  };


  render() {
    const { selectedItems,OPTIONS } = this.state;
    return (
      <Select
        mode="tags"
        placeholder="Inserted are removed"
        value={selectedItems}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {OPTIONS.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
}

export default SubjectSelect;