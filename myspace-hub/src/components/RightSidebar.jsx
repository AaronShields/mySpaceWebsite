import Section from "./Section"


export default function RightSidebar() {
    return (
        <aside className="right-sidebar">

      <h2 className="name">
        <span className="text-chip">Works</span>
      </h2>

      <h2 className="status">
        <span className="text-chip subtle">
          Articles
        </span>
      </h2>

      <h2 className="status">
        <span className="text-chip subtle">
          Videos
        </span>
      </h2>

      <h2 className="status">
        <span className="text-chip subtle">
          Next Event
        </span>
      </h2>

      <p className="status">
        <span className="text-chip subtle">
          Soon...
        </span>
      </p>
    </aside>
      );
  }
  