import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import { ShowMoreWrapper } from '../common/ShowMoreWrapper';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';
import { IPresentation } from './IPresentation';

export default function PresentationRow({
  payload,
}: PropsWithChildren<{ payload: IPresentation.Payload }>) {
  return (
    <EmptyRowCol>
      <ShowMoreWrapper showMoreCount={payload.showMoreCount}>
        {payload.list.map((item, index) => {
          return (
            <CommonRows
              key={index.toString()}
              payload={serialize(item)}
              index={index}
              className="project-item"
            />
          );
        })}
      </ShowMoreWrapper>
    </EmptyRowCol>
  );
}

function serialize(item: IPresentation.Item): IRow.Payload {
  return {
    left: {
      title: DateTime.fromFormat(item.at, Util.LUXON_DATE_FORMAT.YYYY_LL).toFormat(
        Util.LUXON_DATE_FORMAT.YYYY_DOT_LL,
      ),
    },
    right: {
      ...item,
    },
  };
}
