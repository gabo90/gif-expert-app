interface GridItemProps {
    title: string
    url: string
}

export const GridItem = ({title, url}: GridItemProps) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}