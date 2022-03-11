import "./index.css";

function DrawerItem(props) {
  const { children } = props;
  return (
    <div className='DrawerItem'>
      <div className='DrawerItemContent'>{children}</div>
    </div>
  );
}

export default DrawerItem;
