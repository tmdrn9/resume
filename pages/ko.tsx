import { ResumePage } from '../component/ResumePage';
import koreanPayload from '../payload';

export default function KoreanResume() {
  return <ResumePage payload={koreanPayload} language="ko" languageSwitchHref=".." />;
}
