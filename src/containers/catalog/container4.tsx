type TypesProps = {
    arrays: string[]
    titles?: string
    onClick: (title: string, filter: string) => void
}

export default function FilterItems({ arrays, titles, onClick }: TypesProps) {

    return (
        <>
            <h3>{titles}</h3>
            <div className="filter items">
                {
                    arrays.map((key, index) => <a key={index} onClick={() => onClick(key, titles ? titles : '')}>{key}</a>)
                }
            </div>
        </>
    )
}