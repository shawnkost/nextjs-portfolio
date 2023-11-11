type ChildProps = {
  links: Link[];
};

type Link = {
  id: string;
  title: string;
};

export function NavLinks({ links }: ChildProps) {
  return links.map((link) => (
    <li
      key={link.id}
      className={`${'text-white'} cursor-pointer hover:text-primary`}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ));
}
