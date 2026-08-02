import { PropsWithChildren, ReactNode } from 'react';
import { SectionAnimate } from './SectionAnimate';
import { Style } from './Style';

export function CommonSection({
  title,
  titleRight,
  hideTitle,
  keepTitleWithChildren,
  children,
}: PropsWithChildren<{
  title: string;
  titleRight?: ReactNode;
  hideTitle?: boolean;
  keepTitleWithChildren?: boolean;
}>) {
  const sectionId = `section-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const heading = (
    <h2
      style={{ ...Style.blue, fontSize: '22px' }}
      id={sectionId}
      className={`section-heading${hideTitle ? ' sr-only' : ''}`}
    >
      <span data-section-title>{title}</span>
      {titleRight ? (
        <span data-section-title-right style={{ marginLeft: '0.75rem' }}>
          {titleRight}
        </span>
      ) : null}
    </h2>
  );

  return (
    <SectionAnimate>
      <section
        className="editorial-section"
        aria-labelledby={sectionId}
        style={{ margin: '20px 20px' }}
      >
        {keepTitleWithChildren ? (
          <div className="section-title-content">
            {heading}
            {children}
          </div>
        ) : (
          <>
            {heading}
            {children}
          </>
        )}
      </section>
    </SectionAnimate>
  );
}
