import { CSSProperties, PropsWithChildren } from 'react';

import { HrefTargetBlank } from '.';
import { IRow } from './IRow';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
  className,
  highlightAuthor,
}: PropsWithChildren<{
  descriptions: IRow.Description[];
  option?: { padding?: boolean };
  className?: string;
  highlightAuthor?: boolean;
}>) {
  return (
    <>
      {descriptions ? (
        <ul
          className={[option?.padding && 'pt-2', className].filter(Boolean).join(' ')}
          style={{ marginLeft: 20, paddingLeft: 0 }}
        >
          {descriptions.map((description, descIndex) => {
            return (
              <>
                <Description
                  description={description}
                  highlightAuthor={highlightAuthor}
                  key={descIndex.toString()}
                />
                {description.descriptions ? (
                  <DescriptionRecursion
                    descriptions={description.descriptions}
                    highlightAuthor={highlightAuthor}
                    key={descIndex.toString()}
                  />
                ) : (
                  ''
                )}
              </>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
  highlightAuthor,
}: PropsWithChildren<{ descriptions: IRow.Description[]; highlightAuthor?: boolean }>) {
  return (
    <ul>
      {descriptions.map((description, index) => {
        return (
          <>
            <Description
              description={description}
              highlightAuthor={highlightAuthor}
              key={index.toString()}
            />
            {description.descriptions ? (
              <DescriptionRecursion
                descriptions={description.descriptions}
                highlightAuthor={highlightAuthor}
                key={index.toString()}
              />
            ) : (
              ''
            )}
          </>
        );
      })}
    </ul>
  );
}

function Description({
  description,
  highlightAuthor,
}: PropsWithChildren<{ description: IRow.Description; highlightAuthor?: boolean }>) {
  const { content, href, postImage, postHref, weight, badge, badges } = description;

  const badgeComponent = [badge, ...(badges || [])].filter(Boolean).map((label) => (
    <span className="description-badge" key={label}>
      {label}
    </span>
  ));

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={formatContent(content, highlightAuthor)} />{' '}
          {badgeComponent} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={formatContent(content, highlightAuthor)} />{' '}
          {badgeComponent}
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} {badgeComponent} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {content} {badgeComponent} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} {badgeComponent} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={getFontWeight(weight)}>
          {content} {badgeComponent}
        </li>
      </>
    );
  })();

  return component;
}

function formatContent(content: string, highlightAuthor?: boolean) {
  if (!highlightAuthor) {
    return content;
  }

  return content
    .split(/(Lee, S\. L\.)/g)
    .map((part, index) =>
      part === 'Lee, S. L.' ? <strong key={index.toString()}>{part}</strong> : part,
    );
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Pretendard Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  //
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};
