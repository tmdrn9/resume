import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

export function CommonRows({
  index,
  payload,
  className,
}: PropsWithChildren<{ payload: IRow.Payload; index: number; className?: string }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div className={className}>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-left" style={{ paddingRight: '0.5rem' }}>
          <Row>
            <Col md={12}>
              <h4 style={{ ...Style.gray, fontSize: '16px' }}>{left.title}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? <h4 style={{ fontSize: '16px' }}>{right.title}</h4> : ''}
          {right.subTitle ? (
            <i style={{ ...Style.gray, fontSize: '16px' }}>{right.subTitle}</i>
          ) : (
            ''
          )}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
}

CommonRows.defaultProps = {
  className: undefined,
};
