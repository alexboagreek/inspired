import { useSelector } from "react-redux";
import styles from './ColorList.module.scss';
import { Color } from "./Color/Color";

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector(state => state.color);

  return (
    <ul className={styles.colorList}>
      {colors.map((id, i) => {
        const color = colorList.find(color => color.id === id);

        return <Color key={id} color={color?.code} check={!i} />
      })}
    </ul>
  )
};