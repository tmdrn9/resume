import { Row, Col, Badge } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );
  const latestUpdatedByNow = Math.floor(
    DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  );

  return (
    <CommonSection title="INTRODUCE" hideTitle>
      <EmptyRowCol>
        <Row className="split-row">
          <Col sm={12} md={3} className="split-left">
            <h3 style={{ ...Style.blue, fontSize: '22px' }}>INTRODUCE</h3>
          </Col>
          <Col sm={12} md={9} className="split-right">
            {payload.contents.map((content, index) => (
              <p key={index.toString()}>{content}</p>
            ))}
            <p className="text-right">
              <small>Latest Updated</small>{' '}
              <Badge color="secondary">
                {`${latestUpdated.toFormat(
                  Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
                )} (D+${latestUpdatedByNow})`}
              </Badge>
            </p>
            <p className="text-right" style={Style.sign}>
              {payload.sign}
            </p>
          </Col>
        </Row>
      </EmptyRowCol>
    </CommonSection>
  );
}
