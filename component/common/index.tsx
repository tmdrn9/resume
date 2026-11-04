import { Row, Col } from 'reactstrap';
import { PropsWithChildren, ReactNode } from 'react';

export function EmptyRowCol<T = {}>({ children }: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
}

export function HrefTargetBlank({
  url,
  text,
}: PropsWithChildren<{ url: string; text?: ReactNode }>) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {text || url}
    </a>
  );
}
