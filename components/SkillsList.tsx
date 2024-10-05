import { Badge } from '@/components/ui/badge';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
  'GraphQL', 'REST APIs', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Git', 'Docker', 'AWS',
  'Jest', 'Cypress', 'Webpack', 'Babel', 'Redux', 'React Query', 'Figma'
];

export default function SkillsList() {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <Badge key={index} variant="secondary" className="text-lg py-2 px-4 neubrutalism">
          {skill}
        </Badge>
      ))}
    </div>
  );
}