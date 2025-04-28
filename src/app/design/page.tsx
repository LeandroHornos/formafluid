import Editor from '@/components/design/Editor'
import TwoColLayout from '@/components/layout/TwoColLayout'

export default function DesignPage() {
  const leftColumn = (
    <div className="p-4 bg-blue-100">
      <h1>Navigation Menu</h1>
    </div>
  );
  const rightColumn = <Editor />;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Diseño</h1>
      <TwoColLayout leftColumn={leftColumn} rightColumn={rightColumn} />
    </div>
  )
} 