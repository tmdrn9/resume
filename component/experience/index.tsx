import { Badge } from 'reactstrap';
import { DateTime, Duration } from 'luxon';

import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import ExperienceRow from './row';
import { IExperience } from './IExperience';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import Util from '../common/Util';

type Payload = IExperience.Payload;

export const Experience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const language = payload.language || 'ko';
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return '';
    }
    return (
      <span style={{ fontSize: '80%' }}>
        <Badge>{getFormattingExperienceTotalDuration(payload, language)}</Badge>
      </span>
    );
  };

  return (
    <CommonSection title="EXPERIENCE" titleRight={totalPeriod()}>
      {payload.list.map((item, index) => (
        <ExperienceRow key={index.toString()} item={item} index={index} language={language} />
      ))}
    </CommonSection>
  );
}

function getFormattingExperienceTotalDuration(
  payload: IExperience.Payload,
  language: 'ko' | 'en',
) {
  const durations = payload.list.reduce((acc: Duration[], item: IExperience.Item) => {
    const itemDurations = item.positions.map((position: IExperience.Position) => {
      if (position.includeInTotal === false) {
        return null;
      }
      const endedAt = position.endedAt
        ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
        : DateTime.local();
      const startedAt = DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL);
      return endedAt.plus({ month: 1 }).diff(startedAt);
    });
    return acc.concat(itemDurations.filter((duration): duration is Duration => duration !== null)); // 중첩된 배열 평탄화
  }, []);

  const totalExperience = durations.reduce(
    (prev: Duration, cur: Duration) => prev.plus(cur),
    Duration.fromMillis(0),
  );
  const totalMonths = Math.round(totalExperience.as('months'));

  if (language === 'en') {
    return `Total ${Util.getEnglishDuration(totalExperience)}`;
  }

  return `총 ${Util.getFormattingDurationMonths(totalMonths, language)}`;
}
