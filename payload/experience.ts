import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '네이버랩스 (NAVER LABS)',
      positions: [
        {
          title: '3D Vision Research Engineer',
          startedAt: '2026-04',
          descriptions: ['3D Mesh 기반 도면 생성 자동화 개발'],
          skillKeywords: [
            'Linux',
            'Python',
            'Docker',
            'Shapely',
            'Git',
            'FloorplanReconstruction',
            '3D Geometry Processing',
          ],
        },
      ],
    },
    {
      title: '자이언트스텝',
      positions: [
        {
          title: 'AI Research Engineer',
          startedAt: '2025-07',
          endedAt: '2026-03',
          descriptions: [
            'Generative AI 기반 Agentic 3D Scene Generation 기술 조사 및 연구',
            '사내 AI 에셋 검색 플랫폼의 초기 개발 단계부터 참여하여, 배포까지 전 과정 수행',
            '사내 AI모델 활용을 위한 Playground 서비스 개발: 실무 페인포인트의 AI해결 가능성 검증(PoC), 최적 오픈소스 선정 및 API화',
            '매달 논문 리뷰 및 AI 뉴스레터 작성을 통한 최신 기술 현황 공유',
          ],
          skillKeywords: [
            'Linux',
            'PyTorch',
            'PyTorch3D',
            'fastAPI',
            'Docker',
            'Git',
            'ffmpeg',
            'Blender',
            '3D Graphics',
          ],
        },
      ],
    },
    {
      title: '삼성 메디슨',
      positions: [
        {
          title: 'Vision Engineer',
          startedAt: '2022-01',
          endedAt: '2022-06',
          descriptions: [
            '초음파 의료기기 불량 검출 AI 개발 및 검증',
            '최신 연구 트렌드 분석을 위한 논문 리뷰 및 내부 세미나 진행',
          ],
          skillKeywords: ['Git', 'DIGITS', 'Caffe'],
        },
      ],
    },
  ],
};

export default experience;
