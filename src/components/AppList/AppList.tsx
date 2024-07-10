import { Stack, Typography, Theme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/app/store';
import investmentAppImg from '../../assets/investment_app.png'
import timerAppImg from '../../assets/timer_app.png'
import projectsAppImg from '../../assets/project_list_app.png'
import pupImage from '../../assets/nadie-dogs (59).jpg'
import shoppingCartAppImg from '../../assets/shopping_cart_app.png'

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
      route: '/investmentcalculator',
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
      route: '/timergame',
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
      route: '/projectlist',
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
      route: '/shoppingcart',
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
      route: '/counter',
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
          background: (theme: Theme) =>
            mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
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
