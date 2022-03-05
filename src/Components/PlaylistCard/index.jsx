import "./index.css";

function PlaylistCard(props) {
  const { id, name, thumbnail, isLocal, description } = props;
  return (
    <div className='PlaylistCard'>
      <div className='PlaylistCardThumbnailDiv'>
        <img src={thumbnail} alt={name} />
      </div>
      <div className='PlaylistCardInfo'>
        <h3 className='PlaylistCardName'>{name}</h3>
        <div className='PlaylistDescription'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCard;
