import Card from './Card'
import data from '../Data'

export default function Main() {
    console.log(data)
    const cards = data.map(item => {
        return <Card key={item.id} {...item} />
    })
    return (
        <main>
            {cards}
        </main>
    )
}