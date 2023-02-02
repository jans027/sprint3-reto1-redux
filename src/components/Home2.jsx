
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

import NavBar from '../components/NavBar';

import { ButtonIntro1 } from '../styles/PagIntro'

import { ButtonNavBar } from './ButtonNavBar';

export const Home2 = () => {


  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };






  return (

    <div>
      <ButtonIntro1
        onClick={handleLogout}
      >
        <Link to="/login">
          logout
        </Link>
      </ButtonIntro1>
    </div>
  )
}



