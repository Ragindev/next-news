import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar'

export const EOM = ({employee}) => {
    console.log("employee",employee)
  return (
    <div className="">
      <Toolbar/>
      <div className={styles.main}>
      <h1>Employee of the year</h1>
      </div>
      <div className={styles.employeeOfTheMonth}>
      <h2>Ragin</h2>
      <h4>Developer</h4>
      <img src="https://www.instagram.com/p/CgEZOemMnom/"/>
      <p>Developer</p>
      </div>
    </div>
  );
};

// export const getServerSideProps = async pageContext => {
//     const apiResponse = await fetch(
//       'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
//     );
//     const employee = await apiResponse.json();
  
//     return {
//       props: {
//         employee,
//       },
//     };
//   };
export default EOM;
