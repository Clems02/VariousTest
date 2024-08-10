import { CardItem } from "@/src/components/CardItem";
import { Header } from "@/src/components/Header";
import { MenuFilter } from "@/src/components/MenuFilter";
import { REACT_CARDS } from "@/src/data/items";

export type pageType = {
  searchParams: { filter: string };
};

export default function Home({ searchParams }: pageType) {
  const currentFilter = searchParams.filter;
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <MenuFilter filters={filters} currentFilter={currentFilter} />
        <div className="size-full overflow-auto">
          <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REACT_CARDS.filter((card) => {
              if (!currentFilter) return true;
              if (card.category === currentFilter) return true;
            }).map((card) => (
              <CardItem
                key={card.name}
                {...card}
                hideCategory={currentFilter !== undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
