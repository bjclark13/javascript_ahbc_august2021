import './Level.css';

function Level({ level }: { level: number }) {
    return (
        <div className="level" style={{
            borderLeft: `${level * 100}px solid transparent`,
            borderRight: `${level * 100}px solid transparent`,
            borderBottom: `${level * 100}px solid green`,
            marginTop: (50 * level) - 50
        }}></div>
    )
}

export default Level;