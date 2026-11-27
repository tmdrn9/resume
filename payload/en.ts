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
      "I am a research engineer specializing in generative AI and computer vision. During my master's program, I researched GANs, diffusion models, and NeRF. My industry experience includes developing and applying AI technologies such as multimodal retrieval, agentic 3D scene generation, and 3D reconstruction. I have coauthored six SCIE-indexed journal papers, including two first-author papers published in ACM TOMM and Image and Vision Computing.",
      'My experience spans the full AI development lifecycle, from problem definition and dataset development to model design, training, evaluation, system development, and service deployment. I take ownership of unfamiliar problems and see them through to completion, with a focus on applying emerging technologies to real-world challenges and translating research into practical solutions.',
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
              'Developed an automated indoor floor plan generation pipeline, from model design to Docker packaging.',
              'Developed pipelines for indoor 3D reconstruction and mesh refinement.',
              'Developed an interior visualization tool with semantic texture baking and region-specific material replacement.',
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
              'Developed and introduced a generative AI–powered proof of concept for agentic 3D scene generation into production workflows.',
              'Developed the AI pipeline and inference APIs for a natural-language search platform for video and 3D assets, and deployed it as an internal service.',
              'Developed an internal AI playground to evaluate solutions to content production challenges, select suitable open-source models, and make them available through APIs.',
              'Conducted monthly paper reviews and wrote an internal newsletter covering developments in AI.',
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
              'Reviewed recent research and presented findings at internal seminars.',
            ],
          },
        ],
      },
    ],
  },
  project: {
    ...koreanPayload.project,
    list: [
      {
        title: 'Indoor 3D Mesh Refinement and Interior Visualization',
        startedAt: '2026-07',
        endedAt: '2026-10',
        contribution: 'Contribution: 100%',
        skillKeywords: ['PyTorch', 'Hugging Face', 'GenRecon', 'Docker Compose', 'MVS-Texturing'],
        where: 'NAVER LABS / 3D Vision Research Engineer Intern',
        descriptions: [
          {
            content:
              'Developed a demo for refining reconstructed indoor meshes and visualizing region-specific material changes.',
            descriptions: [
              {
                content:
                  'Designed a training-free mesh refinement pipeline that requires no ground-truth meshes.',
              },
              {
                content:
                  'Developed an interactive viewer integrating semantic texture baking with APIs for generating physically based rendering (PBR) materials.',
              },
            ],
          },
          {
            content:
              'Built a foundation for further development of the interior visualization pipeline.',
          },
        ],
      },
      {
        title: 'Automated Floor Plan Generation from 3D Meshes',
        startedAt: '2026-04',
        endedAt: '2026-06',
        contribution: 'Contribution: 100%',
        skillKeywords: ['PyTorch', 'YOLO', 'Transformer', 'Shapely', 'Docker'],
        where: 'NAVER LABS / 3D Vision Research Engineer Intern',
        descriptions: [
          {
            content:
              'Designed and developed a pipeline to automatically generate indoor floor plans from reconstructed 3D meshes.',
            descriptions: [
              {
                content:
                  'Developed a model to align bird’s-eye-view (BEV) density maps, achieving a mean absolute angular error of 0.55°.',
              },
              {
                content:
                  'Developed room polygon and door prediction models using YOLO segmentation and transformer-based refinement (mAP50–95: 0.88; F1: 0.96).',
              },
              {
                content:
                  'Implemented exports compatible with the existing editing tool and packaged the pipeline in Docker for execution with a single command.',
              },
            ],
          },
          {
            content:
              'Reduced floor plan generation time from 14 minutes of manual drafting to 2–3 seconds of automated processing, shifting the workflow from drafting to review.',
          },
        ],
      },
      {
        title: 'Agentic 3D Scene Generation',
        startedAt: '2025-11',
        endedAt: '2026-02',
        contribution: 'Contribution: 90%',
        skillKeywords: ['Claude', 'MCP', 'Blender Python API', 'SAM3D', 'SAM3'],
        where: 'GIANTSTEP / AI Research Engineer',
        descriptions: [
          {
            content:
              'Independently developedan agentic 3D scene generation system to automate repetitive scene assembly tasks.',
            descriptions: [
              {
                content:
                  'Designed an architecture for LLM-based scene planning and orchestration across multiple modules.',
              },
              { content: 'Implemented object detection and 3D object generation modules.' },
            ],
          },
          {
            content:
              'Reduced workflows that previously took several hours to under 10 minutes, including user interaction time.',
          },
          {
            content:
              'Built a Blender-based proof of concept for automated scene generation and applied it to content production workflows.',
          },
        ],
      },
      {
        title: 'Internal Asset Search Platform',
        startedAt: '2025-08',
        endedAt: '2026-01',
        contribution: 'Contribution: 60%',
        skillKeywords: ['JAX/Flax', 'FastAPI', 'VideoPrism', 'PySceneDetect', 'FFmpeg', 'Docker'],
        where: 'GIANTSTEP / AI Research Engineer',
        descriptions: [
          {
            content:
              'Independently designed and developed the AI components for a natural language search platform for video and 3D assets.',
            descriptions: [
              {
                content:
                  'Developed a video processing pipeline incorporating JAX-based embedding inference.',
              },
              {
                content:
                  'Built a pipeline for rendering 3D assets from multiple viewpoints and extracting image embeddings.',
              },
              {
                content:
                  'Developed embedding APIs for video, rendered 3D asset images, and text, and integrated them with the backend.',
              },
            ],
          },
          {
            content:
              'Achieved Top-1 accuracy of 87.21% and Top-5 accuracy of 98.84% on the test set.',
          },
          {
            content:
              'Implemented search responses within one second in production and deployed and operated the platform as an internal web service.',
          },
        ],
      },
      {
        title: 'Internal AI Playground',
        startedAt: '2025-07',
        endedAt: '2026-02',
        contribution: 'Contribution: 30%',
        skillKeywords: ['PyTorch', 'FastAPI', 'Gradio', 'Docker'],
        where: 'GIANTSTEP / AI Research Engineer',
        descriptions: [
          {
            content: 'Developed an internal AI playground to streamline workflows across teams.',
            descriptions: [
              {
                content:
                  'Interviewed internal users to define requirements and validate opportunities for AI adoption.',
              },
              {
                content:
                  'Evaluated open-source generative AI models and developed proofs of concept.',
              },
              {
                content:
                  'Developed three AI inference APIs with FastAPI and built demo applications.',
              },
            ],
          },
          { content: 'Published a regular internal newsletter covering developments in AI.' },
        ],
      },
      {
        title: 'Robust Watermarking for NeRF-Induced Modality Shifts',
        startedAt: '2023-08',
        endedAt: '2025-11',
        contribution: 'Contribution: 80%',
        skillKeywords: ['PyTorch', 'PyTorch3D', 'NeRF', 'MeshLab'],
        where: 'Hallym University MMC Lab / Master’s Program',
        descriptions: [
          {
            content:
              'Designed and developed a 3D watermarking model robust to NeRF-induced modality shifts.',
            descriptions: [
              {
                content:
                  'Designed a watermark embedding and extraction architecture to account for differences among 3D textures, rendered images, and NeRF outputs.',
              },
              {
                content:
                  'Developed a watermarking model with independent decoders to preserve watermark recovery through NeRF training and rendering.',
              },
              {
                content: 'Analyzed the trade-off between watermark recovery and visual quality.',
              },
            ],
          },
          {
            content:
              'Published the research in ACM Transactions on Multimedia Computing, Communications and Applications (TOMM; Q1, JCR 7%).',
          },
        ],
      },
      {
        title: 'Diffusion Inpainting Localization',
        startedAt: '2022-12',
        endedAt: '2024-06',
        contribution: 'Contribution: 70%',
        skillKeywords: ['PyTorch', 'Diffusion Models', 'Transformer', 'U-Net', 'FFT', 'Docker'],
        where: 'Hallym University MMC Lab / Master’s Program',
        descriptions: [
          {
            content:
              'Developed a model to localize diffusion-inpainted regions at the pixel level.',
            descriptions: [
              {
                content:
                  'Created a dataset of approximately 30,000 manipulated images by applying diffusion inpainting to COCO images.',
              },
              {
                content:
                  'Designed a frequency-based module that combines inter-patch and intra-patch similarity to improve localization of manipulated regions.',
              },
            ],
          },
          { content: 'Published the research in Image and Vision Computing (Q1, JCR 18.1%).' },
        ],
      },
      {
        title: 'Pancreatic Cancer Diagnosis with 3D Holography and Deep Learning',
        startedAt: '2022-08',
        endedAt: '2024-02',
        contribution: 'Contribution: 40%',
        skillKeywords: ['Python', 'PyTorch', 'CNN'],
        where: 'Hallym University MMC Lab / Master’s Program',
        descriptions: [
          {
            content:
              'Designed and developed a multimodal, multitask model for pancreatic cancer diagnosis using holographic images and tabular data.',
            descriptions: [
              { content: 'Preprocessed holographic images and integrated tabular data.' },
              {
                content:
                  'Used multitask learning to jointly perform cell line classification and cancer classification.',
              },
            ],
          },
          {
            content:
              'Published the research in Computer Methods and Programs in Biomedicine (SCI(E), JCR top 13%).',
          },
        ],
      },
      {
        title: 'Defect-Diagnosis Model for Ultrasound Devices',
        startedAt: '2022-02',
        endedAt: '2022-06',
        contribution: 'Contribution: 100%',
        skillKeywords: ['Python', 'Caffe', 'DIGITS', 'CNN'],
        where: 'Samsung Medison / Vision Engineer Intern',
        descriptions: [
          {
            content:
              'Designed and developed a CNN-based model to classify defects in ultrasound medical devices.',
            descriptions: [
              {
                content:
                  'Standardized labeling criteria and improved the dataset through additional data collection and cleaning.',
              },
              { content: 'Implemented a two-stage hierarchical CNN classifier.' },
            ],
          },
          {
            content: 'Improved defect detection accuracy from approximately 60% to over 90%.',
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
        contribution: 'Contribution: 70%',
        skillKeywords: [
          'PyTorch',
          'FastAPI',
          'Gemini API',
          'Docker',
          'Google Cloud',
          'Git',
          'GitHub Actions(CI/CD)',
        ],
        where: 'AI-powered 3D body analysis service',
        descriptions: [
          {
            content:
              'Conceived and developed a service for 3D body shape analysis from full-body photos.',
            descriptions: [
              {
                content: 'Proposed the project idea and collected and curated a test dataset.',
              },
              {
                content:
                  'Developed a body shape analysis pipeline using SAM3D-Body and the Gemini API.',
              },
              {
                content:
                  'Improved and validated body shape analysis performance through prompt engineering.',
              },
            ],
          },
          {
            content: 'Achieved 93.1% body shape classification accuracy on the test set.',
          },
          {
            content:
              'Deployed the service and commercialized it in collaboration with partner companies.',
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
        subTitle: 'M.S. in Computer Science (GPA: 4.42/4.5)',
        startedAt: '2022-09',
        endedAt: '2024-08',
      },
      {
        title: 'Hallym University',
        subTitle: 'B.S. in Electronic Engineering and Big Data (GPA: 3.99/4.5)',
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
