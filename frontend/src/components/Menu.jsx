import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Coq au Vin, Beef Bourguignon, Escargot, Ratatouille, Bouillabaisse, Quiche Lorraine, Beef Tartare, Duck à l'Orange, Cassoulet, Croque Monsieur, Nicoise Salad, Sole Meunière, Foie Gras, Boeuf en Daube, Tarte Tatin, Confit de Canard, Crème Brûlée, Pot-au-Feu, Salade Lyonnaise, and Bouchee à la Reine.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
