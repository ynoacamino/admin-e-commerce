import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface OptionGroup {
  id: number;
  name: string;
}

export default function CheckBoxGroup({
  options, groupName,
}: {
  options: OptionGroup[], groupName: string
}) {
  return (
    <div className="col-span-3 flex gap-3 flex-wrap border-border border-[1px] rounded-lg p-3">
      {
        options.map(({ id, name }) => (
          <div className="flex items-center" key={crypto.randomUUID()}>
            <Checkbox id={`${name}${id}`} name={groupName} value={id} />
            <Label htmlFor={`${name}${id}`} className="ml-2">
              {name}
            </Label>
          </div>
        ))
      }
    </div>
  );
}
