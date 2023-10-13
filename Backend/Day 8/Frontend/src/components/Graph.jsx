import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell ,Label} from 'recharts';
import { getExpensebyUid } from '../service/api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6663', '#66FF91'];

const Graph = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userId = localStorage.getItem('xuserId');
        const response = await getExpensebyUid(userId);
        const expensesData = response.data;
        
        // Process the expenses data and calculate total amount spent on each category
        const categoryAmounts = {};

        expensesData.forEach((item) => {
          const { category, expAmount } = item;
          if (categoryAmounts[category]) {
            categoryAmounts[category] += expAmount;
          } else {
            categoryAmounts[category] = expAmount;
          }
        });

        // Convert categoryAmounts into categoryData for the pie chart
        const categoryData = Object.entries(categoryAmounts).map(([name, value], index) => ({
          name,
          value,
          fill: COLORS[index % COLORS.length],
        }));

        // Set both expenses and categoryData states
        setExpenses(expensesData);
        setCategoryData(categoryData);
      } catch (error) {
        console.error('Error fetching and processing data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {expenses.length === 0 ? (
        <div>
        <br/>
        <p style={{color:"white",fontSize:"25px"}}>No  data available yet.</p>
        </div>
      ) : (
      <PieChart width={400} height={450}>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={180}
          innerRadius={100} // Set innerRadius to create a doughnut chart
          fill="#8884d8"
          paddingAngle={2}
          startAngle={90}
            endAngle={450}
            animationBegin={10} // Set animationBegin to control when the animation starts
            animationDuration={800}
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
          
        </Pie>
        <Tooltip />
      </PieChart>
      )}
    </div>
  );
};

export default Graph;
