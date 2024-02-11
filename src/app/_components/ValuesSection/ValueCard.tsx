interface IValueCardProps {
  name: string;
}

export function ValueCard({ name }: IValueCardProps) {
  return (
    <li className="w-full rounded-xl bg-gray p-5 md:p-10 xl:w-[47.8%]">
      <p className="whitespace-nowrap text-xl font-medium md:text-3xl">
        {name}
      </p>
    </li>
  );
}
