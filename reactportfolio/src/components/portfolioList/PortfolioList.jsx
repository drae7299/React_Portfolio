import "./portfolioList.scss"

export default function PortfolioList({id,title,active,setSelected}) {
    return (
        <li id='content' className={active ? "portfolioList active" : "porfolioList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
