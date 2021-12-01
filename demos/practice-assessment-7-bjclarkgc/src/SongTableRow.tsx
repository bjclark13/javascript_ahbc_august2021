import Song from './Song';
import { Link } from "react-router-dom";

function SongTableRow({ song }: { song: Song }) {
    return (
        <tr>
            <td><Link to={"/song/" + song.id}>{song.title}</Link></td>
            <td>{song.artist}</td>
            <td>{song.favorite ? <span style={{ color: 'PaleVioletRed', fontSize: 200 + '%' }}>&hearts;</span> : ''}</td>
        </tr>
    )
}

export default SongTableRow;