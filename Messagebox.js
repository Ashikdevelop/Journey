import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

export default function Messagebox () {
    return (
      <Container>
   <Alert className='w-100%'  >
      This Page ic currently closed.{' '}
      <Alert.Link href="/">back to Shopping.</Alert.Link>. Give it a click if you
      like.
    </Alert>

      </Container>
    )
}
