import { Stack, Typography, Theme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/app/store';
import investmentAppImg from '../../assets/investment_app.png'
import timerAppImg from '../../assets/timer_app.png'
import projectsAppImg from '../../assets/project_list_app.png'
import pupImage from '../../assets/nadie-dogs (59).jpg'
import shoppingCartAppImg from '../../assets/shopping_cart_app.png'
import placePickerAppImg from '../../assets/place_picker_app.png'
import quizAppImg from '../../assets/quiz_app.png'
import userSearchAppImg from '../../assets/user_search_app.png'



const AppList = () => {
  const mode = useAppSelector((state) => state.user.mode);

  const appList = [
    {
      title: 'Investment Calculator App',
      description: 'A yearly investment capital calculator. Code has been refactored to use MUI components',
      thumbnail: (
        <img
          src= {investmentAppImg}
          alt="A screenshot showing a preview of the investment app"
          style={{ filter: mode === 'dark' ? 'brightness(0.5)' : 'none' }}
        />
      ),
      route: '/react-practice-apps/investmentcalculator',
    },
    {
      title: 'Timer Challenge Game',
      description: 'Test your sense of time by guessing as close to the target time as possible without exceeding it!',
      thumbnail: (
        <img
          src= {timerAppImg}
          alt="A screenshot showing a preview of the timer app"
          style={{ filter: mode === 'dark' ? 'brightness(0.5)' : 'none' }}
        />
      ),
      route: '/react-practice-apps/timergame',
    },
    {
      title: 'Project List Tool',
      description: 'List and organise your projects and tasks',
      thumbnail: (
        <img
          src={projectsAppImg}
          alt="A screenshot showing a preview of the timer app"
          style={{ filter: mode === 'dark' ? 'brightness(0.5)' : 'none' }}
        />
      ),
      route: '/react-practice-apps/projectlist',
    },
    {
      title: 'Shoppping Cart App',
      description: 'Add items to a shopping cart using a context wrapper',
      thumbnail: (
        <img
          src={shoppingCartAppImg}
          alt="A screenshot showing a preview of the timer app"
          style={{ filter: mode === 'dark' ? 'brightness(0.5)' : 'none' }}
        />
      ),
      route: '/react-practice-apps/shoppingcart',
    },
    {
      title: 'Places Picker',
      description: 'Use the user\'s longitude and latitude to sort a list of places then add them to a list',
      thumbnail: (
        <img
          src={placePickerAppImg}
          alt="A screenshot showing a preview of the app"
          style={{ filter: mode === 'dark' ? 'brightness(0.5)' : 'none' }}
        />
      ),
      route: '/react-practice-apps/placepicker',
    },
    {
      title: 'Quiz',
      description: 'Test your React knowledge in this timed and shuffled multiple choice quiz',
      thumbnail: (
        <img
          src={quizAppImg}
          alt="A screenshot showing a preview of the app"
          style={{ filter: mode === 'dark' ? 'brightness(0.5)' : 'none' }}
        />
      ),
      route: '/react-practice-apps/quiz',
    },
    {
      title: 'User search',
      description: 'Search for a user to induce an error when one doesn\'t exist. This will show an example of an error boundary made with class components',
      thumbnail: (
        <img
          src={userSearchAppImg}
          alt="A screenshot showing a preview of the app"
          style={{ filter: mode === 'dark' ? 'brightness(0.5)' : 'none' }}
        />
      ),
      route: '/react-practice-apps/usersearch',
    },
    {
      title: 'Places Picker with Backend',
      description: 'Store data in a backend',
      thumbnail: (
        <img
          src={placePickerAppImg}
          alt="A screenshot showing a preview of the app"
          style={{ filter: mode === 'dark' ? 'brightness(0.5)' : 'none' }}
        />
      ),
      route: '/react-practice-apps/placepickerhttp',
    },
    {
      title: 'Placeholder',
      description: 'little doggie',
      thumbnail: (
        <img
          src={pupImage}
          alt="Romi, the cutest pup from narices de nadie"
          style={{ filter: mode === 'dark' ? 'brightness(0.5)' : 'none' }}
        />
      ),
      route: '/react-practice-apps',
    },
  ];

    /**
   * Generates a themed card for each application in the list.
   * 
   * @param {string} title - The title of the application.
   * @param {string} description - The description of the application.
   * @param {JSX.Element} thumbnail - The thumbnail image of the application.
   * @param {string} route - The route to navigate to the application.
   * @returns {JSX.Element} The themed card for the application.
   */
  const themeTypes = (title: string, description: string, thumbnail: JSX.Element, route: string) => (
    <Link to={route} style={{ textDecoration: 'none', color: 'inherit' }} key={title}>
      <Stack
        sx={{
          p: 2,
          boxShadow: 3,
          borderRadius: 5,
          position: 'relative',
          background: (theme: Theme) => theme.palette.background.paper,
          backdropFilter: 'blur(10px)',
        }}
        gap={2}
      >
        <Typography variant="h2">{title}</Typography>
        <Typography textAlign="left" variant="subtitle1">
          {description}
        </Typography>
        {thumbnail}
      </Stack>
    </Link>
  );

  return (
    <Stack gap={5}>{appList.map((app) => themeTypes(app.title, app.description, app.thumbnail, app.route))}</Stack>
  );
};

export default AppList;
