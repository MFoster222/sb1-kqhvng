import SkillsList from '@/components/SkillsList';

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 neu-text-outline">My Skills</h1>
      <SkillsList />
    </div>
  );
}