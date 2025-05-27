import AccordionItem from "./AccordionItem";

interface AccordionListProps {
  items: { title: string; imageUrl: string }[];
}

const AccordionList: React.FC<AccordionListProps> = ({ items }) => {
  return (
    <ul className="space-y-6 max-w-[266px] w-full border-l-2 border-white">
      {items.map((item, idx) => (
        <li key={idx}>
          <AccordionItem title={item.title} imageUrl={item.imageUrl} />
        </li>
      ))}
    </ul>
  );
};

export default AccordionList;
