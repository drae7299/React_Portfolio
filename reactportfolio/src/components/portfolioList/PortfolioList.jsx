import "./portfolioList.scss"

export default function PortfolioList({id,title,active,setSelected}) {
    return (
        <div id='content' className={active ? "portfolioList active" : "porfolioList"} onClick={() => setSelected(id)}>
            {title}
        </div>
    )
}
