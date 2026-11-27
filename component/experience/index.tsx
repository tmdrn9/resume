import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import ExperienceRow from './row';
import { IExperience } from './IExperience';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

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

  return (
    <CommonSection title="EXPERIENCE">
      {payload.list.map((item, index) => (
        <ExperienceRow key={index.toString()} item={item} index={index} language={language} />
      ))}
    </CommonSection>
  );
}
