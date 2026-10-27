import koreanPayload, { Payload } from '.';

const title = 'Resume | Seung-Lee Lee';
const description = 'Resume of Seung-Lee Lee, a 3D Vision Research Engineer.';

const englishPayload: Payload = {
  ...koreanPayload,
  profile: {
    ...koreanPayload.profile,
    image: undefined,
    name: { title: 'Seung-Lee Lee', small: undefined },
    contact: koreanPayload.profile.contact.map((contact) =>
      contact.title === 'Please contact me by email'
        ? { ...contact, title: 'Please contact me by email.' }
        : contact,
    ),
  },
  introduce: {
    ...koreanPayload.introduce,
    contents: [
      'I am a 3D Vision and Generative AI R&D Engineer with experience spanning NeRF research, generative 3D scene generation, indoor 3D reconstruction, and mesh refinement. My research has resulted in six SCI(E) publications, including two first-author papers in ACM TOMM and Image and Vision Computing.',
      'I have worked across the full development cycle, from data construction and problem formulation to model design, training, evaluation, and internal service deployment. I am comfortable defining unfamiliar problems and driving them through to completion, with a focus on turning 3D spatial data into practical value for real-world services.',
    ],
  },
  experience: {
    ...koreanPayload.experience,
    language: 'en',
    list: [
      {
        title: 'NAVER LABS',
        positions: [
          {
            title: '3D Vision Research Engineer Intern',
            startedAt: '2026-04',
            endedAt: '2026-10',
            durationMonths: 6,
            includeInTotal: false,
            descriptions: [
              'Built an automated indoor floor-plan generation pipeline, from model design through Docker-based packaging.',
              'Developed workflows for indoor 3D reconstruction and mesh refinement.',
              'Built a simulation viewer for semantic texture baking and material replacement.',
            ],
            skillKeywords: [
              'Linux',
              'Python',
              'Docker',
              'Shapely',
              'Git',
              'Floorplan Reconstruction',
              '3D Reconstruction',
              '3D Geometry Processing',
            ],
          },
        ],
      },
      {
        title: 'GIANTSTEP',
        positions: [
          {
            title: 'AI Research Engineer',
            startedAt: '2025-07',
            endedAt: '2026-03',
            descriptions: [
              'Researched generative-AI approaches for agentic 3D scene generation.',
              'Led the end-to-end development and deployment of an internal AI asset-search platform.',
              'Built an AI Playground service to evaluate whether AI could address real-world production pain points, select suitable open-source models, and expose them through APIs.',
              'Published monthly paper reviews and an internal AI newsletter to share emerging technology trends.',
            ],
            skillKeywords: [
              'Linux',
              'PyTorch',
              'PyTorch3D',
              'FastAPI',
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
        title: 'Samsung Medison',
        positions: [
          {
            title: 'Vision Engineer Intern',
            startedAt: '2022-01',
            endedAt: '2022-06',
            includeInTotal: false,
            descriptions: [
              'Developed and validated an AI model for detecting defects in ultrasound medical devices.',
              'Analyzed research trends through paper reviews and presented findings in internal seminars.',
            ],
            skillKeywords: ['Git', 'DIGITS', 'Caffe'],
          },
        ],
      },
    ],
  },
  project: {
    ...koreanPayload.project,
    list: [
      {
        title: 'Indoor 3D Mesh Refinement and Interior Simulation',
        startedAt: '2026-07',
        endedAt: '2026-10',
        where: 'NAVER LABS / 3D Vision Research Engineer Intern',
        descriptions: [
          {
            content:
              'Built a 3D asset-generation and simulation demo that improves reconstructed indoor meshes and supports region-specific material replacement.',
            descriptions: [
              {
                content:
                  'Designed a train-free mesh-refinement approach for settings without ground-truth data.',
              },
              {
                content:
                  'Built a simulation viewer that integrates semantic texture baking and PBR-generation APIs.',
              },
            ],
          },
          { content: 'Established the foundation for an extensible interior-simulation pipeline.' },
        ],
      },
      {
        title: 'Automated Floor-Plan Generation from 3D Meshes',
        startedAt: '2026-04',
        endedAt: '2026-06',
        where: 'NAVER LABS / 3D Vision Research Engineer Intern',
        descriptions: [
          {
            content:
              'Designed and built a pipeline that automatically generates indoor floor plans from reconstructed 3D meshes.',
            descriptions: [
              {
                content: 'Developed density-map-based BEV rotation alignment with an MAE of 0.55°.',
              },
              {
                content:
                  'Developed room-polygon and door-prediction models using YOLO segmentation and Transformer refinement (mAP50–95 0.88; F1 0.96).',
              },
              {
                content:
                  'Established an editor-compatible export format and a Docker-based one-command execution environment.',
              },
            ],
          },
          {
            content:
              'Reduced manual drafting from 14 minutes per case to 2–3 seconds and shifted the workflow toward review.',
          },
        ],
      },
      {
        title: 'Agentic 3D Scene Generation',
        startedAt: '2025-10',
        endedAt: '2026-03',
        where: 'GIANTSTEP / AI Research Engineer',
        descriptions: [
          {
            content:
              'Designed and developed an agentic 3D scene-generation system to automate repetitive scene-composition work.',
            descriptions: [
              {
                content:
                  'Designed an LLM-based scene-planning and multi-module orchestration architecture.',
              },
              { content: 'Implemented object-detection and object-generation modules.' },
            ],
          },
          {
            content:
              'Built a Blender-based automated scene-generation proof of concept and validated its production feasibility.',
          },
        ],
      },
      {
        title: 'Internal Asset Search Platform',
        startedAt: '2025-08',
        endedAt: '2026-01',
        where: 'GIANTSTEP / AI Research Engineer',
        descriptions: [
          {
            content:
              'Designed and built a natural-language search platform for internal video and 3D assets, improving asset-discovery efficiency.',
            descriptions: [
              {
                content:
                  'Developed video-understanding and CLIP-based embedding and retrieval pipelines.',
              },
              { content: 'Implemented natural-language search for videos and 3D objects.' },
            ],
          },
          { content: 'Launched and operated the platform as an internal web service.' },
        ],
      },
      {
        title: 'Internal AI Playground',
        startedAt: '2025-07',
        endedAt: '2026-03',
        where: 'GIANTSTEP / AI Research Engineer',
        descriptions: [
          {
            content:
              'Designed and developed an AI Playground to improve operational efficiency across business teams.',
            descriptions: [
              {
                content:
                  'Identified requirements and high-value problems through stakeholder interviews.',
              },
              {
                content: 'Benchmarked open-source generative-AI models and ran proofs of concept.',
              },
              { content: 'Built FastAPI-based APIs and demonstration services.' },
            ],
          },
          { content: 'Published a recurring internal newsletter on emerging AI technology.' },
        ],
      },
      {
        title: 'Robust Watermarking for NeRF-Induced Modality Shifts',
        startedAt: '2023-08',
        endedAt: '2025-11',
        where: 'Hallym University MMC Lab / Master’s Program',
        descriptions: [
          {
            content:
              'Designed and developed a robust 3D watermarking model for NeRF-based modality shifts.',
            descriptions: [
              {
                content:
                  'Designed watermark insertion and extraction architecture that accounts for modality differences among 3D textures, rendered images, and NeRF outputs.',
              },
              {
                content:
                  'Developed an independent-decoder watermarking model robust to modality shifts during NeRF training and rendering.',
              },
              {
                content:
                  'Analyzed the trade-off between watermark extraction performance and image quality.',
              },
            ],
          },
          {
            content:
              'Published this work in ACM Transactions on Multimedia Computing, Communications and Applications (TOMM; Q1, JCR top 7%).',
          },
        ],
      },
      {
        title: 'Diffusion Inpainting Localization',
        startedAt: '2022-12',
        endedAt: '2024-06',
        where: 'Hallym University MMC Lab / Master’s Program',
        descriptions: [
          {
            content:
              'Developed a pixel-level localization model for images manipulated with diffusion inpainting.',
            descriptions: [
              {
                content:
                  'Built a diffusion-inpainting manipulation dataset of approximately 30,000 COCO-based images.',
              },
              {
                content:
                  'Designed an inter-intra similarity module based on frequency features to improve manipulated-region detection.',
              },
            ],
          },
          { content: 'Published this work in Image and Vision Computing (Q1, JCR top 18.1%).' },
        ],
      },
      {
        title: 'Pancreatic Cancer Diagnosis with 3D Holography and Deep Learning',
        startedAt: '2022-08',
        endedAt: '2024-02',
        where: 'Hallym University MMC Lab / Master’s Program',
        descriptions: [
          {
            content:
              'Designed and developed a multimodal, multitask model for pancreatic-cancer diagnosis using holographic images and tabular data.',
            descriptions: [
              { content: 'Preprocessed holographic images and integrated tabular data.' },
              {
                content:
                  'Applied multitask learning for simultaneous cell-line and cancer classification.',
              },
            ],
          },
          {
            content:
              'Published this work in Computer Methods and Programs in Biomedicine (SCI(E), JCR top 13%).',
          },
        ],
      },
      {
        title: 'Defect-Diagnosis Model for Ultrasound Devices',
        startedAt: '2022-02',
        endedAt: '2022-06',
        where: 'Samsung Medison / Vision Engineer Intern',
        descriptions: [
          {
            content:
              'Designed and developed a CNN-based multiclass model for classifying defects in ultrasound medical devices.',
            descriptions: [
              {
                content:
                  'Standardized labeling criteria and rebuilt the dataset through collection and cleaning.',
              },
              { content: 'Implemented a two-stage hierarchical CNN classification architecture.' },
            ],
          },
          {
            content:
              'Improved accuracy by more than 30% and streamlined the manual inspection workflow.',
          },
        ],
      },
    ],
  },
  sideProject: {
    ...koreanPayload.sideProject,
    list: [
      {
        title: 'Personal Body',
        websiteHref: 'https://personalbody.co.kr/business',
        startedAt: '2025-12',
        endedAt: '2026-04',
        where: 'AI-powered 3D body-shape analysis service',
        descriptions: [
          {
            content:
              'Planned and developed a 3D body-shape analysis service based on full-body photographs.',
          },
          { content: 'Proposed the project and built the test dataset directly.' },
          {
            content:
              'Established a pipeline for SAM3D-Body-based 3D human-model generation and Gemini API-based body-shape analysis.',
          },
          {
            content:
              'Deployed the service and operated it in collaboration with partner companies.',
          },
        ],
      },
    ],
  },
  education: {
    ...koreanPayload.education,
    list: [
      {
        title: 'Hallym University',
        subTitle: 'M.S. in Computer Science',
        startedAt: '2022-09',
        endedAt: '2024-08',
      },
      {
        title: 'Hallym University',
        subTitle: 'B.S. in Electronic Engineering and Big Data',
        startedAt: '2018-03',
        endedAt: '2022-08',
      },
    ],
  },
  article: {
    ...koreanPayload.article,
    list: koreanPayload.article.list.map((article, index) =>
      index === koreanPayload.article.list.length - 1
        ? {
            ...article,
            content:
              'Choe, J. H., Lee, S. L., Seo, Y., Hou, J. U.†, "Generative Adversarial Network-Based Data Augmentation for Addressing Medical Data Imbalance," Korea Information Processing Society ACK, 2022.',
          }
        : article,
    ),
  },
  _global: {
    ...koreanPayload._global,
    headTitle: title,
    seo: { ...koreanPayload._global.seo, title, description },
  },
};

export default englishPayload;
