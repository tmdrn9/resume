import { DateTime, Duration } from 'luxon';
import _debug from 'debug';

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = 'yyyy-LL-dd',
  YYYY_LL = 'yyyy-LL',
  YYYY_DOT_LL = 'yyyy. LL',
  YYYY_DOT_LL_DOT_DD = 'yyyy. LL. dd',
  KINDNESS_FULL = 'DDDD',

  DURATION_KINDNESS = 'y년 M개월',
  DURATION_KINDNESS_ONLY_MONTH = 'M개월',
  DURATION_KINDNESS_ONLY_YEAR = 'y년',
}

function getFormattingDuration(
  from: DateTime,
  to: DateTime = DateTime.local(),
  language: 'ko' | 'en' = 'ko',
) {
  const log = debug('Util:getFormattingDuration');

  // 햇수 계산을 위해 month에 1개월 추가
  const diff = to.plus({ month: 1 }).diff(from, ['years', 'months']);

  log(diff.milliseconds, diff.get('years'), diff.get('months'));

  // 기간 포맷 결정
  let format;
  if (diff.years > 0 && diff.months === 0) {
    format = LUXON_DATE_FORMAT.DURATION_KINDNESS_ONLY_YEAR;
  } else if (diff.years === 0 && diff.months > 0) {
    // 1년 미만이면 개월만 표시
    format = LUXON_DATE_FORMAT.DURATION_KINDNESS_ONLY_MONTH;
  } else {
    format = LUXON_DATE_FORMAT.DURATION_KINDNESS;
  }

  if (language === 'en') {
    return getEnglishDuration(diff);
  }

  return diff.toFormat(format);
}

function getEnglishDuration(duration: Duration) {
  const normalized = duration.shiftTo('years', 'months');
  const years = Math.trunc(normalized.years);
  const months = Math.round(normalized.months);
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }

  return parts.join(' ') || '0 months';
}

function getFormattingDurationMonths(months: number, language: 'ko' | 'en') {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (language === 'en') {
    const parts: string[] = [];
    if (years > 0) {
      parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    }
    if (remainingMonths > 0) {
      parts.push(`${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`);
    }
    return parts.join(' ') || '0 months';
  }

  if (years === 0) {
    return `${remainingMonths}개월`;
  }
  if (remainingMonths === 0) {
    return `${years}년`;
  }
  return `${years}년 ${remainingMonths}개월`;
}

function debug(channel: string) {
  return _debug(`yosume:${channel}`);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  getEnglishDuration,
  getFormattingDurationMonths,
  debug,
};

export default Util;
