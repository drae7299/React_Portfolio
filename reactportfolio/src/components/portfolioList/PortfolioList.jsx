import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected,  }) {

  // const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <a target="_blank" href="">
    <li
      id="content"
      className={active ? "portfolioList active" : "porfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
    </a>
  );
}
