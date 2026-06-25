import { PropsWithChildren } from 'react';
import { IOpenSource } from './IOpenSource';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import { ShowMoreWrapper } from '../common/ShowMoreWrapper';

export default function OpenSourceRow({
  payload,
}: PropsWithChildren<{ payload: IOpenSource.Payload }>) {
  return (
    <EmptyRowCol>
      <ShowMoreWrapper showMoreCount={payload.showMoreCount}>
        {payload.list.map((item, index) => (
          <CommonRows
            key={index.toString()}
            payload={serialize(item)}
            index={index}
            className="project-item"
          />
        ))}
      </ShowMoreWrapper>
    </EmptyRowCol>
  );
}

function serialize(item: IOpenSource.Item): IRow.Payload {
  return {
    left: {
      title: item.title,
    },
    right: {
      descriptions: item.descriptions,
    },
  };
}
