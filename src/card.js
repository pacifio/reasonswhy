export function Card({ title }) {
  return (
    <div className="animated">
      <div className="wrapper">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="text text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
          {title}
        </div>
      </div>
    </div>
  );
}
