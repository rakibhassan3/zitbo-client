import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import avatar from "../../../assets/avatar.jpg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      {/* logo */}
      <div>
        <Link to="/" className={styles.logo}>
          zitbo
        </Link>
      </div>
      <div className={styles.navItems}>
        <div className={styles.notificationContainer}>
            <IoMdNotificationsOutline size="2em" className={styles.notificationIcon} />
            {/* notification count */}
            <div className={styles.notificationCountContainer}>
                <span className={styles.notificationCount}>0</span>
            </div>
        </div>
        <div className={styles.avatarContainer}>
            <img src={avatar} className={styles.avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
