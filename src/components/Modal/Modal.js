import React from 'react';
import {Button, Header, Icon, Modal} from 'semantic-ui-react';

const ModalBasicExample = props => (
  <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
    <Header icon='archive' content='Description' />
    <Modal.Content>
      <p>{props.explanation}</p>
    </Modal.Content>
  </Modal>
);

export default ModalBasicExample;
