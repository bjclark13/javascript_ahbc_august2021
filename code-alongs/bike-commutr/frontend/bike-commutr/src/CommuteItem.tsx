interface Commute {
    user: string,
    commute: string,
    distance: number
}

function CommuteItem({ commute }: { commute: Commute }) {
    return (
        <li>
            <strong>{commute.commute}</strong>
            Distance: {commute.distance}
        </li>
    )
}

export default CommuteItem;