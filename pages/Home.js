// @ts-check
import React, { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export const response = {
  list: [
    { rank: '1', points: '1025', name: 'John Doe', age: '27' },
    { rank: '3', points: '245', name: 'Elizabeth', age: '17' },
    { rank: '2', points: '566', name: 'Samantha', age: '22' },
    { rank: '10', points: '878', name: 'Katherine', age: '21' },
    { rank: '11', points: '778', name: 'Danerys', age: '25' },
    { rank: '12', points: '983', name: 'Eva', age: '23' },
    { rank: '13', points: '122', name: 'Ruby', age: '22' },
    { rank: '14', points: '656', name: 'Valentina', age: '27' },
    { rank: '15', points: '298', name: 'Mila', age: '32' },
    { rank: '4', points: '497', name: 'Arya', age: '31' },
    { rank: '5', points: '667', name: 'Jordan', age: '40' },
    { rank: '6', points: '221', name: 'Christina', age: '43' },
    { rank: '9', points: '333', name: 'Evangeline', age: '26' },
    { rank: '8', points: '500', name: 'Jazmine', age: '35' },
    { rank: '7', points: '765', name: 'Kira', age: '33' },
  ],
};

const index = 0;

const Home = (props) => {
  console.log(props);
  const match = useRouteMatch();
  const history = useHistory();

  console.log(match, history);

  // useEffect(() => {
  //   console.log(match);
  //   if (match) {
  //     response.list.sort((a, b) => a.rank - b.rank);
  //   } else if (match1) {
  //     response.list.sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (match2) {
  //     response.list.sort((a, b) => a.points - b.points);
  //   } else if (match3) {
  //     response.list.sort((a, b) => a.age - b.age);
  //   }
  // }, [match]);

  const { rank, name, points, age } = response.list[index];

  return (
    <div className="text-center mt-50">
      <div>
        <div>
          <button data-testid="route-rank" className="outlined" type="button">
            Rank
          </button>
          <button data-testid="route-name" className="outlined" type="button">
            Name
          </button>
          <button data-testid="route-points" className="outlined" type="button">
            Points
          </button>
          <button data-testid="route-age" className="outlined" type="button">
            Age
          </button>
        </div>
      </div>
      <div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
        <table className="mt-50" data-testid="app-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className="numeric">Points</th>
              <th className="numeric">Age</th>
            </tr>
          </thead>
          <tbody data-testid="app-tbody">
            <tr key={rank}>
              <td data-testid={`rank-${index}`}>{rank}</td>
              <td data-testid={`name-${index}`}>{name}</td>
              <td data-testid={`points-${index}`} className="numeric">
                {points}
              </td>
              <td data-testid={`age-${index}`} className="numeric">
                {age}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
