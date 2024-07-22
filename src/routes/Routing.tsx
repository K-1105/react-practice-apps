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

const Routing = () => {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/investmentcalculator' element={<InvestmentCalculatorApp />} />
      <Route path='/timergame' element={<TimerGameApp />} />
      <Route path='/projectlist' element={<ProjectsListApp />} />
      <Route path='/shoppingcart' element={<ShoppingCartApp />} />
      <Route path='/placepicker' element={<PlacePickerApp />} />
      <Route path='/quiz' element={<QuizApp />} />
    </Routes>
  );
};

export default Routing;
