type CategoryCardSkeletonProps = {
  sum: number;
  cardType : 'category' | 'location' | 'product'
};

const CardSkeleton = ({ sum, cardType }: CategoryCardSkeletonProps) => {
  const rows: number[] = [];

  for (let i = 0; i < sum; i++) {
    rows.push(i);
  }

  function setClassname(card : string) {
	switch(card) {
		case('category'): {
			return "w-[4rem] h-[4rem]"
		}
		case('location'): {
			return "w-full h-[7rem]"
		}
		case('product'): {
			return "w-full h-[15rem]"
		}
	}
  }

  return rows.map((i) => (
    <div
      key={i}
      className={setClassname(cardType) + " rounded-md bg-slate-300 shadow-sm animate-pulse"}
    ></div>
  ));
};
export default CardSkeleton;
