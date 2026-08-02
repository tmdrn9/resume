import { PropsWithChildren } from 'react';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { IArticle } from './IArticle';
import { EmptyRowCol } from '../common';
import { CommonSection } from '../common/CommonSection';
import { CommonDescription } from '../common/CommonDescription';
import Util from '../common/Util';

type Payload = IArticle.Payload;

export const Article = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="PUBLICATIONS" keepTitleWithChildren>
      <div className="publication-highlights" aria-label="Publication highlights">
        <div className="publication-highlight-card">
          <div className="publication-highlight-content">
            <span className="publication-highlight-label">SCI(E) Publications</span>
            <strong className="publication-highlight-value">6</strong>
            <span className="publication-highlight-unit">papers</span>
          </div>
        </div>
        <div className="publication-highlight-card publication-highlight-card--featured">
          <div className="publication-highlight-content">
            <span className="publication-highlight-label">First-author · Avg. IF 5.1</span>
            <strong className="publication-highlight-value">2</strong>
            <span className="publication-highlight-unit">papers</span>
          </div>
        </div>
        <div className="publication-highlight-card">
          <div className="publication-highlight-content">
            <span className="publication-highlight-label">Domestic Conference</span>
            <strong className="publication-highlight-value">1</strong>
            <span className="publication-highlight-unit">paper</span>
          </div>
        </div>
      </div>
      <ArticleRow payload={payload} />
    </CommonSection>
  );
}

function ArticleRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const log = Util.debug('ArticleRow');

  log(payload);

  return (
    <EmptyRowCol>
      <CommonDescription descriptions={payload.list} className="publication-list" />
    </EmptyRowCol>
  );
}
