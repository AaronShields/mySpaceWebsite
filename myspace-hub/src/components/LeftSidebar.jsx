import background from "../assets/background.jpeg"
import gamer from "../assets/gamer_image.jpeg"

export default function LeftSidebar() {
    return (
      <aside className="left-sidebar">
        <img
          src={gamer}
          alt="profile"
          className="avatar"
        />

      <h2 className="name">
        <span className="text-chip">Aaron Shields</span>
      </h2>

      <p className="status">
        <span className="text-chip subtle">
          Place of Residence: NYC
        </span>
      </p>

      <p className="status">
        <span className="text-chip subtle">
          Favorite Food: Bacon Egg and Cheese
        </span>
      </p>

      <p className="status">
        <span className="text-chip subtle">
          Currently Reading: AfroPessimism - Frank B. Wilderson III
        </span>
      </p>

    <div className="spotify-wrapper">
      <iframe
    title="Spotify player"
    src="https://open.spotify.com/embed/album/0dFNwlJ9RmOEARHBIWVLg7"
    allow="encrypted-media"
      />
    </div>
    </aside>
    );
  }
  