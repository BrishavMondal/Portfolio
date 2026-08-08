import AboutCard from "./AboutCard";

const stats = [
  {
    number: "10+",
    title: "Projects",
  },
  {
    number: "3+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Passion",
  },
];

export default function Stats() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {stats.map((item) => (
        <AboutCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}