import React from 'react'
import styles from "./styles.module.css";

const Home = () => {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>UnionWithUs</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
      <img
          src="https://d13qu023z75971.cloudfront.net/2021/11/Electronic-Voting-Blog---Image----1-.png"
          alt="Brahmastra"
          width={"100%"}
          height={"100%"}
        />
		</div>
  )
}

export default Home