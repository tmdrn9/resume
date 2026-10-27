import { ResumePage } from '../component/ResumePage';
import Payload from '../payload';

export default function KoreanResume() {
  return <ResumePage payload={Payload} language="ko" languageSwitchHref=".." />;
}
