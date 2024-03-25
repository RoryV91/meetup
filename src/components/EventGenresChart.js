import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042', '#AF19FF'];

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    const getData = () => {
        return genres
            .map((genre) => {
                const value = events.filter((event) => event.summary.includes(genre)).length;
                return { name: genre, value };
            })
            .filter((genre) => genre.value > 0);
    };

    useEffect(() => {
        setData(getData());
    }, [events]);

    // const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    //     const RADIAN = Math.PI / 180;
    //     const radius = outerRadius;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    //     return percent ? (
    //       <text
    //         x={x}
    //         y={y}
    //         fill="#8884d8"
    //         textAnchor={x > cx ? 'start' : 'end'}
    //         dominantBaseline="central"
    //       >
    //         {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
    //       </text>
    //     ) : null;
    //   };

    return (
        <ResponsiveContainer width="100%" height={400}>
        <PieChart
            margin={{
                top: 20,
                bottom: 20,
                right: 20,
                left: 20,
            }}
        >
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
        </ResponsiveContainer>
    );
};

export default EventGenresChart;