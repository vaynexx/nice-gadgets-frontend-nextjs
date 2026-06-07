import { Button } from '@/shared/ui/button';
import { ChevronDownIcon } from '@/shared/ui/icons/ChevronDown';
import { ChevronLeftIcon } from '@/shared/ui/icons/ChevronLeft';
import { ChevronRightIcon } from '@/shared/ui/icons/ChevronRight';
import { ChevronUpIcon } from '@/shared/ui/icons/ChevronUp';
import { HeartIcon } from '@/shared/ui/icons/HeartIcon';
import { HeartIconSelected } from '@/shared/ui/icons/HeartIconSelected';
import { MinusIcon } from '@/shared/ui/icons/MinusIcon';
import { PlusIcon } from '@/shared/ui/icons/PlusIcon';

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
          <Button variant="control" size={null}>
            <ChevronLeftIcon />
          </Button>
          <Button variant="control" size={null}>
            <ChevronRightIcon />
          </Button>
          <Button variant="control" size={null}>
            <ChevronUpIcon />
          </Button>
          <Button variant="control" size={null}>
            <ChevronDownIcon />
          </Button>
          <Button variant="control-disabled" size={null}>
            <ChevronLeftIcon />
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-white mb-4">Buttons Favorite</h2>
        <div className="flex gap-2">
          <Button variant="favorite" size={null}>
            <HeartIcon />
          </Button>
          <Button variant="favorite-selected" size={null}>
            <HeartIconSelected />
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-white mb-4">Buttons Plus/Minus</h2>
        <div className="flex gap-2">
          <Button variant="control" size={null}>
            <MinusIcon />
          </Button>
          <Button variant="control" size={null}>
            <PlusIcon />
          </Button>
          <Button variant="control-disabled" size={null}>
            <MinusIcon />
          </Button>
          <Button variant="control-disabled" size={null}>
            <PlusIcon />
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-white mb-4">Buttons Color Picker</h2>
        <div className="flex gap-3">
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-space-gray"
          />
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-silver"
          />
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-gold"
          />
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-blue"
          />
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-red"
          />
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-black"
          />
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-green"
          />
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-yellow"
          />
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-white"
          />
          <Button
            variant="color-picker"
            size={null}
            className="bg-product-purple"
          />
          <Button
            variant="color-picker-selected"
            size={null}
            className="bg-product-gold"
          />
        </div>
      </div>
    </div>
  );
}
