import React, { PureComponent as Component } from 'react';

class Chat extends Component {
  state = {
    key: 'value',
  }

  render () {
    const { key } = this.state;

    return (
      <h1>
        {key}
      </h1>
    );
  }
};

export default Chat;
