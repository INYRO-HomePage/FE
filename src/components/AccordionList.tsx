import AccordionItem from "./AccordionItem";

interface AccordionListProps {
  items: { title: string; content: React.ReactNode }[];
}

const AccordionList: React.FC<AccordionListProps> = ({ items }) => {
  return (
    <ul className="space-y-6 max-w-[266px] w-full border-l-2 border-white">
      {items.map((item, idx) => (
        <li key={idx}>
          <AccordionItem title={item.title}>{item.content}</AccordionItem>
        </li>
      ))}
    </ul>
  );
};

export default AccordionList;
