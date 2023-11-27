import { productsData } from 'data/productsData'
import './ChooseColor.css'
import { useState, useEffect } from 'react';

export const ChooseColor = ({ openModal }) =>{

    const [yourProduct, setYourProduct] = useState([]);

    // Функція для додавання товару до корзини
  const addToShoppingList =  async (product) => {
   await setYourProduct([...yourProduct, product]);
      openModal(); // Викликати функцію openModal для відкриття модального вікна
    };
    // Ефект викликається при зміні cartItems і зберігає його у локальному сховищі
    useEffect(() => {
      localStorage.setItem('yourProduct', JSON.stringify(yourProduct));
    }, [yourProduct]);
    
  
    // Ефект викликається при завантаженні компонента і витягує дані з локального сховища
  
    return(
        <section className='product'>
        <h2>Обери свій колір</h2>
        <ul className='product-list'>
            {productsData.map((product)=>(
            <li className='product-item'  key={product.id}>
                <img className='product-img'  src={product.imageSrc} alt="Жилет" />
<img className='discount-img' src={require('Images/discount.png')} alt="" />
<p className='discount-text'>-{product.discount}%</p>
<p className='todayPrice-text'>Ціна сьогодні:</p>
                <p className='productPrice-text'>{product.price} грн</p>
                <p className='productTodayPrice-text'>{product.todayPrice} грн</p>
                <p className='product-color'>{product.color}</p>
                <button
              className='product-button'
              type='button'
              onClick={() => addToShoppingList(product)}
            >Обрати {product.color}</button>

            </li>))}
        </ul>
        </section>
    )
}