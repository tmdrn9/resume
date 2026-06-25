import { ReactNode } from 'react';

type SectionPayload = {
  disable?: boolean;
  printExclude?: boolean;
};

/** disable / printExclude 플래그를 확인하여 조건부 렌더링하는 섹션 래퍼 */
export function Section({ payload, children }: { payload: SectionPayload; children: ReactNode }) {
  if (payload?.disable) return null;
  if (payload?.printExclude) {
    return <div className="print-exclude">{children}</div>;
  }
  return <>{children}</>;
}
