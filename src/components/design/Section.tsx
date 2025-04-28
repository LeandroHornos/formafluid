import { FormSection } from '@/apptypes'

export default function Section({ section }: { section: FormSection }) {
  return <div>{section.name}</div>
}
