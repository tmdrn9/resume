import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Badge } from 'reactstrap';
import { CommonRows } from '../common/CommonRow';
import { EmptyRowCol } from '../common';
import { IRow } from '../common/IRow';
import { ShowMoreWrapper } from '../common/ShowMoreWrapper';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { ISideProject } from './ISideProject';

export default function SideProjectRow({
  payload,
}: PropsWithChildren<{ payload: ISideProject.Payload }>) {
  return (
    <EmptyRowCol>
      <ShowMoreWrapper showMoreCount={payload.showMoreCount}>
        {payload.list.map((item, index) => {
          return (
            <CommonRows
              key={index.toString()}
              payload={serialize(item)}
              index={index}
              className="side-project-item"
            />
          );
        })}
      </ShowMoreWrapper>
    </EmptyRowCol>
  );
}

function serialize(payload: ISideProject.Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (payload.endedAt) {
      const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return `${startedAt} ~`;
  })();

  return {
    left: {
      title,
      subTitle: payload.contribution ? (
        <span style={{ ...Style.gray, fontSize: '14px' }}>{payload.contribution}</span>
      ) : (
        undefined
      ),
    },
    right: {
      title: payload.websiteHref ? (
        <span>
          {payload.title}{' '}
          <a
            href={payload.websiteHref}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: '12px', fontWeight: 400 }}
          >
            Website ↗
          </a>
        </span>
      ) : (
        payload.title
      ),
      subTitle: payload.where,
      descriptions: payload.descriptions,
      footer: createSkillKeywords(payload.skillKeywords),
    },
  };
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords || skillKeywords.length === 0) {
    return undefined;
  }

  return (
    <div className="project-skill-keywords">
      {skillKeywords.map((keyword) => (
        <Badge style={Style.skillKeywordBadge} key={keyword} color="secondary" className="mr-1">
          {keyword}
        </Badge>
      ))}
    </div>
  );
}
