import { Button } from '@/shared/ui/button';

import { ChevronDownIcon } from '../../shared/ui/icons-chevron/ChevronDown';
import { ChevronLeftIcon } from '../../shared/ui/icons-chevron/ChevronLeft';
import { ChevronRightIcon } from '../../shared/ui/icons-chevron/ChevronRight';
import { ChevronUpIcon } from '../../shared/ui/icons-chevron/ChevronUp';

export default function ButtonsDemo() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h2 className="text-white mb-4">Buttons Pagination</h2>
        <div className="flex gap-2">
          <Button variant="pagination">1</Button>
          <Button variant="pagination">2</Button>
          <Button variant="pagination">3</Button>
          <Button variant="pagination-selected">4</Button>
        </div>
      </div>
      <div>
        <h2 className="text-white mb-4">Buttons Chevron</h2>
        <div className="flex gap-2">
          <Button variant="chevron" size={null}>
            <ChevronLeftIcon />
          </Button>
          <Button variant="chevron" size={null}>
            <ChevronRightIcon />
          </Button>
          <Button variant="chevron" size={null}>
            <ChevronUpIcon />
          </Button>
          <Button variant="chevron" size={null}>
            <ChevronDownIcon />
          </Button>
          <Button variant="chevron-disabled" size={null}>
            <ChevronLeftIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
