// import "./styles.scss"

export default function Divider({ text }: { text: string }) {
    return (
        <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text text-sm text-gray-500">{text}</span>
            <div className="divider-line"></div>
        </div>
    )
}

