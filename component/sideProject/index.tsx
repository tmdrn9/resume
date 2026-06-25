import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { ISideProject } from './ISideProject';
import SideProjectRow from './row';

type Payload = ISideProject.Payload;

export const SideProject = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="SIDE PROJECT">
      <SideProjectRow payload={payload} />
    </CommonSection>
  );
}
