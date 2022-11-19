import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleReservation, getRockets } from '../../redux/Rockets/rocketReducer';
import style from './rockets.module.css';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  });

  return (
    <div className={style.container} data-testid="list-of-rockets">

      {rockets.map((el) => (
        <div key={el.id} className={style.item}>
          <img src={el.flickr_images} alt="Rocket" />
          <div className={style.info}>
            <h1>{el.rocket_name}</h1>
            <p>
              <button
                type="submit"
                className={el.reserved ? style.reserved : style.hide}
              >
                Reserved
              </button>
              {el.description}
            </p>
            <button
              type="submit"
              onClick={() => dispatch(toggleReservation(el.id))}
              className={el.reserved ? style.cancel : style.myButton}
            >
              {el.reserved ? 'Cancel Reservation' : 'Reserve Rocket' }
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Rockets;
