import { useRef, useContext, ReactNode } from 'react';

import CartModal from './CartModal.tsx';
import { CartContext } from '../store/shopping-cart-context.tsx';

import logo from '../assets/dog_sponsor_logo.png'

export default function Header() {
  const modal = useRef<{ open: () => void } | null>(null);
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    if (modal.current) {
      modal.current.open();
    }
  }

  let modalActions:  ReactNode = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img className='rounded-md' src={logo} alt="the logo, it is a dog and a stethoscope" />
          <h1>Sponsor Page</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}