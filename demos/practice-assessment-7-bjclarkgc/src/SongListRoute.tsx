import songs from './songs';
import SongTableRow from './SongTableRow';
function SongListRoute() {
    return (
        <>
            <h2> Songs </h2>

            <table>
                <thead><td>Title</td><td>Artist</td><td>Favorite</td></thead>
                {
                    songs.map((song) => <SongTableRow song={song} />)
                }
            </table>
        </>
    )
}

export default SongListRoute;