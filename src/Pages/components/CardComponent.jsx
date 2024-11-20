import { NavLink } from "react-router-dom";

function CardComponent({ cards, clasName, style }) {
  return (
    <div>
      {cards.map((card) => {
        const cardData = card;
        const hasIcon = card.icon && card.icon.trim() !== '';
        return (
          <NavLink
          key={cardData.id}
          to={cardData.path}>
          <div key={cardData.id} className={` ${clasName} flex hover:scale-105 duration-300 py-5 flex-col gap-[4px] text-slate-700 dark:text-slate-300 `}>
            <div className={`${style} w-64 h-28 border border-neutral-200 dark:border-neutral-800 bg-cover rounded-md ${hasIcon ? '' : 'bg-gradient-to-br from-slate-300 to-slate-800'}`}
              style={{ backgroundImage: hasIcon ? `url(${card.icon})` : 'bg-gradient-to-br from-slate-300 to-slate-800'}}
            >
            </div>
            <h3 className='text-sm'>{cardData.title}</h3>
            <p className='text-[11px] dark:text-slate-400'>{cardData.date}</p>
          </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default CardComponent;
