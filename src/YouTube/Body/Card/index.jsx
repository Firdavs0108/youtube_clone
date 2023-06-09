import React, { Component } from 'react';
import { Container, Video, Wrapper, User, Title,Button } from '../Card/style';

export default class YouTube extends Component {
  render() {
    const { user, video, name, view, time, title, id } = this.props.value;
    const { onDelete } = this.props;

    return (
      <Container>
        <Video src={video} />
        <Wrapper>
          <User src={user.img} />
          <div>
            <Title>{title}</Title>
            <Title desc>{id} | {user.name}</Title>
            <div style={{ display: 'flex' }}>
              <Title desc>
                {view} {time} <Button onClick={() => onDelete(id)}>Delete</Button>
              </Title>
            </div>
          </div>
        </Wrapper>
      </Container>
    );
  }
}

