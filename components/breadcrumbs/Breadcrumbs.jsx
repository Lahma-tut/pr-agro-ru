import styles from "./breadcrumbs.module.css";
import Headling from "./Headling";

export default function Breadcrumbs(props) {
  return (
      <div className={styles.breadcrumb}>
        <div className={styles.box}>
          <Headling {...props} />
        </div>
      </div>
  );
}