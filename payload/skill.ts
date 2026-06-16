import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Python',
    },
    {
      title: 'C++',
    },
    {
      title: 'C',
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'PyTorch',
    },
    {
      title: 'TensorFlow',
    },
    {
      title: 'OpenCV',
    },
    {
      title: 'scikit-learn',
    },
    {
      title: 'NumPy',
    },
    {
      title: 'Pandas',
    },
    {
      title: 'PyTorch3D',
    },
    {
      title: 'Shapely',
    },
    {
      title: 'Matplotlib',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Linux (Ubuntu)',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'PyCharm',
    },
    {
      title: 'GitHub',
    },
    {
      title: 'Weights & Biases',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Jira/Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, networkSecurity, misc],
};

export default skill;
