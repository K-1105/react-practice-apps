import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import Home from '@/pages/Home/Home';
import InvestmentCalculatorApp from '@/apps/investment_calculator/InvestmentCalculatorApp';
import TimerGameApp from '@/apps/timer_game/TimerGameApp';
import ProjectsListApp from '@/apps/projects_list/ProjectsListApp';
import ShoppingCartApp from '@/apps/shopping_cart/ShoppingCartApp';
import PlacePickerApp from '@/apps/place_picker/PlacePickerApp';
import QuizApp from '@/apps/quiz/QuizApp';
import ErrorBoundariesApp from '@/apps/error_boundaries/ErrorBoundariesApp';
import HttpRequestApp from '@/apps/http_requests/HttpRequestApp';

const Routing = () => {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/react-practice-apps/login' element={<Login />} />
      <Route path='/react-practice-apps/register' element={<Register />} />
      <Route path='/react-practice-apps/investmentcalculator' element={<InvestmentCalculatorApp />} />
      <Route path='/react-practice-apps/timergame' element={<TimerGameApp />} />
      <Route path='/react-practice-apps/projectlist' element={<ProjectsListApp />} />
      <Route path='/react-practice-apps/shoppingcart' element={<ShoppingCartApp />} />
      <Route path='/react-practice-apps/placepicker' element={<PlacePickerApp />} />
      <Route path='/react-practice-apps/quiz' element={<QuizApp />} />
      <Route path='/react-practice-apps/usersearch' element={<ErrorBoundariesApp />} />
      <Route path='/react-practice-apps/placepickerhttp' element={<HttpRequestApp />} />
    </Routes>
  );
};

export default Routing;
