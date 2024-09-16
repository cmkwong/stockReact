import { useEffect, useState } from 'react';
import { useDnD } from '../store/DnDContext';
import styles from './TrashBin.module.css';

const TrashBin = () => {
  // hover on the trash
  const [hovered, setHovered] = useState(false);

  const dnDContext = useDnD();

  // if hovered the trash
  useEffect(() => {
    dnDContext.setTrashHovered(hovered);
  }, [hovered]);

  return (
    <div className={styles['container']}>
      <section>
        <span
          className={styles['trash']}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseOver={() => {}}
        >
          <span className={hovered ? `${styles['hover']}` : ''}></span>
          <i></i>
        </span>
      </section>
    </div>
  );
};

export default TrashBin;
