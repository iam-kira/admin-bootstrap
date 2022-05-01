import './Chart.scss'
import { Treemap, ResponsiveContainer } from 'recharts';


const data = [
    {
        "name": "axis",
        "children": [
            {
                "name": "Axis",
                "size": 24593,
                "fill": "#FF3D32"
            },
            {
                "name": "Axes",
                "size": 1302, "fill": "#FF5249"
            },
            {
                "name": "AxisGridLine",
                "size": 652, "fill": "#FF5249"
            },
            {
                "name": "AxisLabel",
                "size": 636, "fill": "#FF5223"
            },
            {
                "name": "CartesianAxes",
                "size": 6703, "fill": "#FF5276"
            }
        ]
    },
    {
        "name": "controls",
        "children": [
            {
                "name": "TooltipControl",
                "size": 8435, "fill": "#00035B"
            },
            {
                "name": "SelectionControl",
                "size": 7862, "fill": "#0C0F6D"
            },
            {
                "name": "PanZoomControl",
                "size": 5222, "fill": "#1C1F80"
            },
            {
                "name": "HoverControl",
                "size": 4896, "fill": "#303392"
            },
            {
                "name": "ControlList",
                "size": 4665, "fill": "#494CA4"
            },
            {
                "name": "ClickControl",
                "size": 3824, "fill": "#AAABDA"
            },
            {
                "name": "ExpandControl",
                "size": 2832, "fill": "#8587C8"
            },
            {
                "name": "DragControl",
                "size": 2649, "fill": "#D2D3EC"
            }
        ]
    },
    {
        "name": "data",
        "children": [
            {
                "name": "Data",
                "size": 20544, "fill": "#A56EB5"
            },
            {
                "name": "NodeSprite",
                "size": 19382, "fill": "#B889C5"
            },
            {
                "name": "DataList",
                "size": 19788, "fill": "#CBA7D5"
            },
            {
                "name": "DataSprite",
                "size": 10349, "fill": "#DFC8E6"
            },
            {
                "name": "EdgeSprite",
                "size": 3301, "fill": "#F4ECF6"
            },
            {
                "name": "render",
                "children": [
                    {
                        "name": "EdgeRenderer",
                        "size": 5569, "fill": "#40A316"
                    },
                    {
                        "name": "ShapeRenderer",
                        "size": 2247, "fill": "#61B73C"
                    },
                    {
                        "name": "ArrowType",
                        "size": 698, "fill": "#74C152"
                    },
                    {
                        "name": "IRenderer",
                        "size": 353, "fill": "#B3E0A0"
                    }
                ]
            },
            {
                "name": "ScaleBinding",
                "size": 11275, "fill": "#1C1C1C"
            },
            {
                "name": "TreeBuilder",
                "size": 9930, "fill": "#545454"
            },
            {
                "name": "Tree",
                "size": 7147, "fill": "#C6C6C6"
            }
        ]
    },
    {
        "name": "events",
        "children": [
            {
                "name": "DataEvent",
                "size": 7313, "fill": "123"
            },
            {
                "name": "SelectionEvent",
                "size": 6880, "fill": "123"
            },
            {
                "name": "TooltipEvent",
                "size": 3701, "fill": "123"
            },
            {
                "name": "VisualizationEvent",
                "size": 2117, "fill": "123"
            }
        ]
    },
    {
        "name": "legend",
        "children": [
            {
                "name": "Legend",
                "size": 20859
            },
            {
                "name": "LegendRange",
                "size": 10530
            },
            {
                "name": "LegendItem",
                "size": 4614
            }
        ]
    },
    {
        "name": "operator",
        "children": [
            {
                "name": "distortion",
                "children": [
                    {
                        "name": "Distortion",
                        "size": 6314, "fill": "#EFE81A"
                    },
                    {
                        "name": "BifocalDistortion",
                        "size": 4461, "fill": "#F1EA35"
                    },
                    {
                        "name": "FisheyeDistortion",
                        "size": 3444, "fill": "#F7F389"
                    }
                ]
            },
            {
                "name": "encoder",
                "children": [
                    {
                        "name": "PropertyEncoder",
                        "size": 4138, "fill": "123"
                    },
                    {
                        "name": "Encoder",
                        "size": 4060, "fill": "123"
                    },
                    {
                        "name": "ColorEncoder",
                        "size": 3179, "fill": "123"
                    },
                    {
                        "name": "SizeEncoder",
                        "size": 1830
                    },
                    {
                        "name": "ShapeEncoder",
                        "size": 1690
                    }
                ]
            },
            {
                "name": "filter",
                "children": [
                    {
                        "name": "FisheyeTreeFilter",
                        "size": 5219, "fill": "#98EDDF"
                    },
                    {
                        "name": "VisibilityFilter",
                        "size": 3509, "fill": "#B4F2E8"
                    },
                    {
                        "name": "GraphDistanceFilter",
                        "size": 3165, "fill": "#D2F7F1"
                    }
                ]
            },
            {
                "name": "IOperator",
                "size": 1286
            },
            {
                "name": "label",
                "children": [
                    {
                        "name": "Labeler",
                        "size": 9956, "fill": "#F9F6A6"
                    },
                    {
                        "name": "RadialLabeler",
                        "size": 3899, "fill": "#FBF9C3"
                    },
                    {
                        "name": "StackedAreaLabeler",
                        "size": 3202, "fill": "#FDFCE0"
                    }
                ]
            },
        ]
    }
]




const Chart3 = ({ aspect, title }) => {
    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                < Treemap
                    width={730}
                    height={250}
                    data={data}
                    dataKey="size"
                    ratio={
                        4 / 3}
                    stroke="#fff"
                    fill="#8884d8"
                />
            </ResponsiveContainer>
        </div>
    )
}

export default Chart3
