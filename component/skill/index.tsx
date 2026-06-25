import { Row, Col, Tooltip } from 'reactstrap';
import { PropsWithChildren, useState } from 'react';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommonSection } from '../common/CommonSection';
import { ISkill } from './ISkill';
import SkillRow from './row';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ISkill.Payload;

export const Skill = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="SKILL" titleRight={createTooltip(payload.tooltip)}>
      {payload.skills.map((skill, index) => (
        <SkillRow key={index.toString()} skill={skill} index={index} />
      ))}
    </CommonSection>
  );
}

function createTooltip(content?: string) {
  if (!content) {
    return '';
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <small>
      {' '}
      <FontAwesomeIcon icon={faQuestionCircle} id="skill-tooltip" />
      <Tooltip
        style={{ whiteSpace: 'pre-wrap' }}
        placement="right"
        target="skill-tooltip"
        isOpen={tooltipOpen}
        toggle={toggle}
      >
        {content}
      </Tooltip>
    </small>
  );
}
