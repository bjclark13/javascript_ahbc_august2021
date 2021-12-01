import songs from './songs';
import { useParams } from 'react-router-dom'

function SongRoute() {
    const params = useParams();

    const song = songs.find((song) => song.id === parseInt(params.id as string));

    if (!song) {
        return <> No Song Found </>
    }
    console.log(song, songs);
    return (
        <>
            {song.title}, {song.artist}, {song.favorite ? 'Yes' : 'No'}
        </>
    )

}

export default SongRoute;