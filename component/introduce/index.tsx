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
  const paragraphOccurrences = new Map<string, number>();
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
            <h2
              className="section-heading introduce-heading"
              style={{ ...Style.blue, fontSize: '22px' }}
            >
              INTRODUCE
            </h2>
          </Col>
          <Col sm={12} md={9} className="split-right">
            {payload.contents.map((content) => {
              const occurrence = paragraphOccurrences.get(content) ?? 0;
              const paragraphKey = `${content}-${occurrence}`;
              const highlightedPartOccurrences = new Map<string, number>();
              paragraphOccurrences.set(content, occurrence + 1);

              return (
                <p key={paragraphKey}>
                  {content.split(/(ACM TOMM|Image and Vision Computing)/g).map((part) => {
                    const isHighlighted =
                      part === 'ACM TOMM' || part === 'Image and Vision Computing';

                    if (!isHighlighted) {
                      return part;
                    }

                    const partOccurrence = highlightedPartOccurrences.get(part) ?? 0;
                    highlightedPartOccurrences.set(part, partOccurrence + 1);

                    return <i key={`${part}-${partOccurrence}`}>{part}</i>;
                  })}
                </p>
              );
            })}
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
