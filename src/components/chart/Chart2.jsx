import './Chart.scss'
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    { name: "January", Total: 1200, Rate: 120, Invest: 812, "fill": "#8884d8" },
    { name: "February", Total: 2100, Rate: 10, Invest: 1876, "fill": "#83a6ed" },
    { name: "March", Total: 800, Rate: 50, Invest: 400, "fill": "#FF6FB5" },
    { name: "April", Total: 1600, Rate: 340, Invest: 800, "fill": "#ffc658" },
    { name: "May", Total: 900, Rate: 0, Invest: 900, "fill": "#d0ed57" },
    { name: "June", Total: 1700, Rate: 100, Invest: 1600, "fill": "#a4de6c" },
];



const Chart2 = ({ aspect, title }) => {
    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <RadialBarChart
                    width={50}
                    height={100}
                    innerRadius="10%"
                    outerRadius="80%"
                    data={data}
                    startAngle={180}
                    endAngle={0}
                >
                    <RadialBar minAngle={15} label={{ fill: 'darkblack', position: 'insideStart' }} background clockWise={true} dataKey='Total' />
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    <Tooltip />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart2
 