import { ISideProject } from '../component/sideProject/ISideProject';

const sideProject: ISideProject.Payload = {
  disable: false,
  showMoreCount: 3,
  list: [
    {
      title: 'Personal Body',
      websiteHref: 'https://personalbody.co.kr/business',
      startedAt: '2025-12',
      endedAt: '2026-04',
      contribution: '기여도: 70%',
      skillKeywords: [
        'PyTorch',
        'FastAPI',
        'Gemini API',
        'Docker',
        'Google Cloud',
        'Git',
        'GitHub Actions(CI/CD)',
      ],
      where: 'AI 기반 3D 체형 분석 서비스',
      descriptions: [
        {
          content: '전신 사진 기반 3D 체형 분석 서비스 기획 및 개발',
          descriptions: [
            { content: '프로젝트 아이디어 제안 및 테스트 데이터셋 직접 수집·구축' },
            { content: 'SAM3D-Body 및 Gemini API 기반 체형 분석 파이프라인 개발' },
            { content: 'Prompt Engineering을 통한 체형 분석 성능 개선 및 검증' },
          ],
        },
        {
          content: '테스트 데이터 기준 체형 분류 정확도 93.1% 달성',
        },
        {
          content: '실제 서비스 배포 및 파트너사 협업을 통한 사업화',
        },
      ],
    },
  ],
};

export default sideProject;
