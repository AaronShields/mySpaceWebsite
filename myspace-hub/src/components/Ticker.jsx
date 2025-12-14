export default function Ticker({ text = "loading..." }) {
    const repeated = Array.from({ length: 14 }, () => `${text} ✦`).join(" ");
    return (
        <div className="ticker" role="banner" aria-label="Ticker">
            <div className="ticker__track">
                <span>{repeated}</span>
                <span aria-hidden="true"> </span>
            </div>
        </div>
    );
}