import { ResumePage } from '../component/ResumePage';
import Payload from '../payload/en';

export default function EnglishResume() {
  return <ResumePage payload={Payload} language="en" languageSwitchHref="../ko" />;
}
