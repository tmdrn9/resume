import { IProject } from '../component/project/IProject';

const WHERE = {
  GS: '자이언트스텝(GIANTSTEP) AI Research Engineer',
  NVL: '네이버랩스(NAVER Labs) 3D Vision Research Engineer',
  SM: '삼성메디슨 Vision Engineer',
  MMC: '한림대학교 MMC Lab Master Course',
  preMMC: '한림대학교 MMC Lab Bachelor Course',
};

const project: IProject.Payload = {
  disable: false,
  showMoreCount: 3,
  list: [
    {
      title: '3D Mesh 기반 도면 생성 자동화 개발',
      startedAt: '2026-04',
      where: WHERE.NVL,
      descriptions: [
        {
          content: '수작업 도면 생성 프로세스를 자동화하여 검수 중심 Workflow 구축',
          descriptions: [
            { content: 'Mesh 기반 BEV 생성 및 데이터 구축 파이프라인 개발' },
            { content: 'Room Polygon 및 Door Prediction 모델 설계·학습·평가' },
            { content: 'Room Boundary Prior 기반 Door Prediction 구조 설계' },
            { content: 'Geometry 기반 후처리 알고리즘 개발' },
          ],
        },
        {
          content: '건당 수천 원 수준의 작업 비용 및 작업 시간 절감 기반 구축',
        },
      ],
    },
    {
      title: 'Agentic 3D Scene Generation 개발',
      startedAt: '2025-10',
      endedAt: '2026-03',
      where: WHERE.GS,
      descriptions: [
        {
          content:
            '반복적인 Scene 구성 업무 자동화를 위한 Agentic 3D Scene Generation 시스템 설계·개발',
          descriptions: [
            { content: 'LLM 기반 Scene Planning 및 Multi-module Orchestration 구조 설계' },
            { content: 'Object Detection/Generation 모듈 구현' },
          ],
        },
        {
          content: 'Blender 기반 자동 Scene 생성 PoC 구현 및 실무 적용 가능성 검증',
        },
      ],
    },
    {
      title: '사내 에셋 검색 플랫폼 개발',
      startedAt: '2025-08',
      endedAt: '2026-01',
      where: WHERE.GS,
      descriptions: [
        {
          content:
            ' 자연어 기반 사내 비디오·3D 에셋 검색 플랫폼을 설계·개발하여 에셋 탐색 업무 효율화에 기여',
          descriptions: [
            { content: 'Video Understanding 및 CLIP 기반 임베딩/Retrieval 파이프라인 개발' },
            { content: '자연어 Query 기반 비디오·3D Object 검색 기능 구현' },
          ],
        },
        {
          content: '사내 웹 서비스로 배포 및 운영',
        },
      ],
    },
    {
      title: '사내 Playground 서비스 개발',
      startedAt: '2025-07',
      endedAt: '2026-03',
      where: WHERE.GS,
      descriptions: [
        {
          content: '현업 부서의 업무 효율화를 위한 AI Playground 서비스 설계·개발',
          descriptions: [
            { content: '현업 인터뷰를 통한 요구사항 정의 및 문제 발굴' },
            { content: 'Generative AI 오픈소스 모델 조사 및 PoC 수행' },
            { content: 'FastAPI 기반 API 및 데모 서비스 구현' },
          ],
        },
        {
          content: '최신 AI 기술 현황을 공유하는 사내 뉴스레터 정기 발행',
        },
      ],
    },
    {
      title: 'NeRF가 유발하는 모달리티 변환에 강인한 워터마킹 연구',
      startedAt: '2023-08',
      endedAt: '2025-11',
      where: WHERE.MMC,
      descriptions: [
        {
          content: 'NeRF 기반 모달리티 변환 환경에서 강인한 3D 워터마킹 모델 설계·개발',
          descriptions: [
            {
              content:
                '3D Texture, Rendering Image, NeRF Output 간 모달리티 차이를 고려한 워터마킹 삽입·추출 구조 설계',
            },
            {
              content:
                'NeRF 학습 및 렌더링 과정에서 발생하는 모달리티 변환에도 강인한 독립 Decoder 기반 워터마킹 모델 개발',
            },
            { content: '워터마크 추출 성능 및 이미지 품질 Trade-off 분석' },
          ],
        },
        {
          content:
            'ACM Transactions on Multimedia Computing, Communications and Applications(TOMM)[Q1, JCR 7%] 논문 게재',
        },
      ],
    },
    {
      title: 'Diffusion inpainting 검출 모델 연구',
      startedAt: '2022-12',
      endedAt: '2024-06',
      where: WHERE.MMC,
      descriptions: [
        {
          content:
            'Diffusion Inpainting으로 생성된 이미지 조작 영역을 픽셀 단위로 탐지하는 Localization 모델 개발',
          descriptions: [
            { content: 'COCO 기반 약 3만 장 규모의 Diffusion Inpainting 조작 데이터셋 구축' },
            {
              content:
                'Frequency Feature 기반 Inter-Intra Similarity 모듈을 설계하여 조작 영역 탐지 성능 개선',
            },
          ],
        },
        {
          content: 'Image and Vision Computing [Q1, JCR 18.1%] 논문 게재',
        },
      ],
    },
    {
      title: '3차원 홀로그래피와 딥러닝을 이용한 췌장암 진단 기술 개발',
      startedAt: '2022-08',
      endedAt: '2024-02',
      where: WHERE.MMC,
      descriptions: [
        {
          content:
            '홀로그래피 영상과 정형 데이터를 활용한 췌장암 진단 Multi-modal Multi-task 모델 설계·개발',
          descriptions: [
            { content: '홀로그래피 영상 전처리 및 정형 데이터 통합' },
            { content: '세포주 분류와 암 분류를 동시에 수행하는 Multi-task Learning 적용' },
          ],
        },
        {
          content: 'Computer Methods and Programs in Biomedicine [SCI(E) JCR top 13%] 에 게재',
        },
      ],
    },
    {
      title: '초음파기기 불량품 진단 모델 개발',
      startedAt: '2022-02',
      endedAt: '2022-06',
      where: WHERE.MMC,
      descriptions: [
        {
          content: '초음파 의료기기 불량 진단을 위한 CNN 기반 다중 분류 모델 설계·개발',
          descriptions: [
            { content: '라벨링 기준 표준화 및 데이터 재수집·정제' },
            { content: 'CNN 기반 2단계 계층적 분류 구조 적용' },
          ],
        },
        {
          content: '정확도 30% 이상 향상 및 기존 수작업 검사 공정의 진단 효율 개선',
        },
      ],
    },
    {
      title: '복강경 수술 영상 기반 실시간 총담관 탐지 모델 개발',
      startedAt: '2021-08',
      endedAt: '2025-03',
      where: WHERE.preMMC,
      descriptions: [
        {
          content: '복강경 수술 영상 기반 실시간 총담관 탐지 모델 설계·개발',
          descriptions: [
            { content: '의료 도메인 특성을 반영한 데이터 증강 전략 재설계' },
            { content: '부적합한 증강 기법 제거 및 학습 전략 개선' },
          ],
        },
        {
          content: '초기 모델 대비 AP Score 18.35% 향상',
        },
        {
          content: 'Videosurgery and other Miniinvasive Techniques논문 게재',
        },
      ],
    },
    {
      title: '의료 데이터 불균형 문제 해결을 위한 GAN 기반 데이터 증강',
      startedAt: '2021-09',
      endedAt: '2022-11',
      where: WHERE.preMMC,
      descriptions: [
        {
          content: '의료 데이터 불균형 완화를 위한 Pix2Pix 기반 데이터 증강 파이프라인 설계·개발',
          descriptions: [
            { content: '암 클래스 대상 합성 데이터 자동 생성' },
            { content: '기존 라벨 재활용 기반 데이터 증강 파이프라인 구축' },
          ],
        },
        {
          content: '한국 정보처리 학회논문 게재 및 우수논문상 수상',
        },
      ],
    },
  ],
};

export default project;
