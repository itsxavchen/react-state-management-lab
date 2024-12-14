// src/App.jsx
import React, { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const handleAddFighter = (selectedzombieFighter) => {
    if (money >= selectedzombieFighter.price) {
      const newZombieArray = [...team, selectedzombieFighter]
      setTeam(newZombieArray);
      setMoney(money - selectedzombieFighter.price);
      setTotalStrength(totalStrength + selectedzombieFighter.strength);
      setTotalAgility(totalAgility + selectedzombieFighter.agility)
    } else {
      console.log('Not enough money')
      alert('Not enough money');
    }
  };

  const handleRemoveFighter = (nameToRemove) => {
    const zombieToRemove = team.find((member) => member.name === nameToRemove);
  
    if (zombieToRemove) {
      const updatedTeam = team.filter((member) => member.name !== nameToRemove);
      setTeam(updatedTeam);
      setMoney(money + zombieToRemove.price);
      setTotalAgility(totalAgility - zombieToRemove.agility)
      setTotalStrength(totalStrength - zombieToRemove.strength)
    }
  };

  return (
    <div>
      <h1>Money: ${money}</h1>

      <div>
      <h1>My Team:</h1>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((member, idx) => (
              <li key={idx}>
                <div>Name: {member.name}</div>
                <img src={member.img} alt={member.name} />
                <div>Price: {member.price}</div>
                <div>Strength: {member.strength}</div>
                <div>Agility: {member.agility}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h1>Total Strength: {totalStrength}</h1>
      </div>

      <div>
        <h1>Total Agility: {totalAgility}</h1>
      </div>

      <div>
        <h1>Zombie Fighters:</h1>
        <ul>
          {zombieFighters.map((zombieFighter, idx) => (
            <li key={idx}>
              <div>Name: {zombieFighter.name}</div>
              <div>Price: {zombieFighter.price}</div>
              <div>Strength: {zombieFighter.strength}</div>
              <div>Agility: {zombieFighter.agility}</div>
              <img src={zombieFighter.img} alt={zombieFighter.name} />
              <div>
                <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
              </div>
              <div>
                <button onClick={() => handleRemoveFighter(zombieFighter.name)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
