import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { Style } from '../common/Style';
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
  return (
    <CommonSection title="INTRODUCTION" hideTitle>
      <EmptyRowCol>
        <Row className="split-row">
          <Col sm={12} md={3} className="split-left">
            <h2
              className="section-heading introduce-heading"
              style={{ ...Style.blue, fontSize: '22px' }}
            >
              INTRODUCTION
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
            <p className="text-right" style={{ marginBottom: 0 }}>
              Last Updated {payload.latestUpdated.replace(/-/g, '.')}
            </p>
            <p className="text-right" style={{ ...Style.sign, marginTop: 0 }}>
              {payload.sign}
            </p>
          </Col>
        </Row>
      </EmptyRowCol>
    </CommonSection>
  );
}
