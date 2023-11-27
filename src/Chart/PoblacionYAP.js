window.PLOTLYENV = window.PLOTLYENV || {}; if (document.getElementById("poblacion_YAP")) {
    Plotly.newPlot("poblacion_YAP",
        [{
            "customdata": ["NOMB_CNIDA"], "ids": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            "marker": {
                "color": "#8ebad9", "colorbar": { "len": 0.8 },
                "colorscale": [[0.0, "rgb(255,255,255)"], [0.125, "rgb(240,240,240)"], [0.25, "rgb(217,217,217)"], [0.375, "rgb(189,189,189)"],
                [0.5, "rgb(150,150,150)"], [0.625, "rgb(115,115,115)"], [0.75, "rgb(82,82,82)"], [0.875, "rgb(37,37,37)"],
                [1.0, "rgb(0,0,0)"]], "line": { "color": "#1f77b4", "width": 1.0 }, "reversescale": false, "showscale": false
            },
            "name": "Cantidad personas", "opacity": 1.0, "orientation": "v", "text": [],
            "textposition": "auto", "type": "bar", "x":
                ["Puerto \u00d1umi", "Puerto Cedro", "Bocas del Taraira", "Puerto Solano", "Centro Providencia", "Vista Hermosa", "Puerto Curupira",
                    "Campo Alegre", "Bocas del Uga (Wuga)", "Ca\u00f1o Laurel", "Agua Blanca", "Bellavista", "Jotabeya", "Awaurita", "Puerto Cordillera",
                    "Bocas del Pir\u00e1", "Paromena", "La Playa", "Puerto Sabana", "Union Jirijirimo", "Santa Clara"], "y":
                [147.0, 72.0, 80.0, 48.0, 205.0, 126.0, 56.0, 106.0, 71.0, 49.0, 50.0, 123.0, 75.0, 134.0, 29.0, 203.0, 124.0, 145.0, 33.0, 72.0, 22.0]
        }],
        {
            "barmode": "group", "legend": { "orientation": "v" }, "paper_bgcolor": "rgb(255,255,255)", "plot_bgcolor": "rgb(255,255,255)",
            "showlegend": true, "template": {
                "data": {
                    "bar": [{
                        "error_x": { "color": "#2a3f5f" }, "error_y": { "color": "#2a3f5f" }, "marker":
                            { "line": { "color": "#E5ECF6", "width": 0.5 } }, "type": "bar"
                    }], "barpolar":
                        [{ "marker": { "line": { "color": "#E5ECF6", "width": 0.5 } }, "type": "barpolar" }], "carpet":
                        [{
                            "aaxis": {
                                "endlinecolor": "#2a3f5f", "gridcolor": "white", "linecolor": "white",
                                "minorgridcolor": "white", "startlinecolor": "#2a3f5f"
                            }, "baxis":
                            {
                                "endlinecolor": "#2a3f5f", "gridcolor": "white", "linecolor": "white", "minorgridcolor": "white",
                                "startlinecolor": "#2a3f5f"
                            }, "type": "carpet"
                        }], "choropleth": [{
                            "colorbar": { "outlinewidth": 0, "ticks": "" },
                            "type": "choropleth"
                        }], "contour": [{
                            "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]], "type": "contour"
                        }], "contourcarpet": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "type": "contourcarpet" }],
                    "heatmap": [{
                        "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]], "type": "heatmap"
                    }], "heatmapgl": [{
                        "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale":
                            [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "heatmapgl"
                    }], "histogram": [{
                        "marker": {
                            "colorbar":
                                { "outlinewidth": 0, "ticks": "" }
                        }, "type": "histogram"
                    }], "histogram2d": [{
                        "colorbar": { "outlinewidth": 0, "ticks": "" },
                        "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "histogram2d"
                    }], "histogram2dcontour": [{
                        "colorbar":
                            { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "histogram2dcontour"
                    }],
                    "mesh3d": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "type": "mesh3d" }], "parcoords": [{
                        "line": {
                            "colorbar":
                                { "outlinewidth": 0, "ticks": "" }
                        }, "type": "parcoords"
                    }], "pie": [{ "automargin": true, "type": "pie" }], "scatter":
                        [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatter" }], "scatter3d": [{
                            "line":
                                { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } },
                            "type": "scatter3d"
                        }], "scattercarpet": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattercarpet" }],
                    "scattergeo": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattergeo" }], "scattergl":
                        [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattergl" }], "scattermapbox":
                        [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattermapbox" }], "scatterpolar":
                        [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatterpolar" }], "scatterpolargl":
                        [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatterpolargl" }], "scatterternary":
                        [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatterternary" }], "surface":
                        [{
                            "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]], "type": "surface"
                        }], "table": [{
                            "cells": { "fill": { "color": "#EBF0F8" }, "line": { "color": "white" } },
                            "header": { "fill": { "color": "#C8D4E3" }, "line": { "color": "white" } }, "type": "table"
                        }]
                }, "layout": {
                    "annotationdefaults":
                        { "arrowcolor": "#2a3f5f", "arrowhead": 0, "arrowwidth": 1 }, "coloraxis": { "colorbar": { "outlinewidth": 0, "ticks": "" } },
                    "colorscale": {
                        "diverging": [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"],
                        [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]], "sequential":
                            [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "sequentialminus": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]]
                    }, "colorway":
                        ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], "font":
                        { "color": "#2a3f5f" }, "geo": {
                            "bgcolor": "white", "lakecolor": "white", "landcolor": "#E5ECF6", "showlakes": true,
                            "showland": true, "subunitcolor": "white"
                        }, "hoverlabel": { "align": "left" }, "hovermode": "closest", "mapbox":
                        { "style": "light" }, "paper_bgcolor": "white", "plot_bgcolor": "#E5ECF6", "polar": {
                            "angularaxis":
                                { "gridcolor": "white", "linecolor": "white", "ticks": "" }, "bgcolor": "#E5ECF6", "radialaxis":
                                { "gridcolor": "white", "linecolor": "white", "ticks": "" }
                        }, "scene": {
                            "xaxis": {
                                "backgroundcolor": "#E5ECF6",
                                "gridcolor": "white", "gridwidth": 2, "linecolor": "white", "showbackground": true, "ticks": "", "zerolinecolor": "white"
                            },
                            "yaxis": {
                                "backgroundcolor": "#E5ECF6", "gridcolor": "white", "gridwidth": 2, "linecolor": "white", "showbackground": true, "ticks":
                                    "", "zerolinecolor": "white"
                            }, "zaxis": {
                                "backgroundcolor": "#E5ECF6", "gridcolor": "white", "gridwidth": 2, "linecolor":
                                    "white", "showbackground": true, "ticks": "", "zerolinecolor": "white"
                            }
                        }, "shapedefaults": { "line": { "color": "#2a3f5f" } },
                    "ternary": {
                        "aaxis": { "gridcolor": "white", "linecolor": "white", "ticks": "" }, "baxis": {
                            "gridcolor": "white", "linecolor":
                                "white", "ticks": ""
                        }, "bgcolor": "#E5ECF6", "caxis": { "gridcolor": "white", "linecolor": "white", "ticks": "" }
                    },
                    "title": { "x": 0.05 }, "xaxis": {
                        "automargin": true, "gridcolor": "white", "linecolor": "white", "ticks": "", "title":
                            { "standoff": 15 }, "zerolinecolor": "white", "zerolinewidth": 2
                    }, "yaxis": {
                        "automargin": true, "gridcolor":
                            "white", "linecolor": "white", "ticks": "", "title": { "standoff": 15 }, "zerolinecolor": "white", "zerolinewidth": 2
                    }
                }
            },
            "title": { "font": { "color": "#000000", "family": "Arial", "size": 10 }, "text": "Dimensi\u00f3n Poblacional por Comunidad" },
            "xaxis": {
                "gridcolor": "#bdbfc0", "tickfont": { "color": "#000000", "family": "Arial", "size": 10 }, "title": {
                    "font":
                        { "color": "#000000", "family": "Arial", "size": 10 }, "text": "Comunidad"
                }
            }, "yaxis": {
                "gridcolor": "#bdbfc0", "tickfont":
                    { "color": "#000000", "family": "Arial", "size": 10 }, "title": {
                        "font": { "color": "#000000", "family": "Arial", "size": 10 },
                        "text": "Personas"
                    }, "type": "linear"
            }
        }, {
            "scrollZoom": true,
        "editable": true, "modeBarButtonsToRemove": ["toImage", "sendDataToCloud", "editInChartStudio"], "responsive": true
    })
};

// additional js function to select and click on the data
// returns the ids of the selected/clicked feature

var plotly_div = document.getElementById('poblacion_YAP')
var plotly_data = plotly_div.data

// selecting function
plotly_div.on('plotly_selected', function (data) {
    var dds = {};
    dds["mode"] = 'selection'
    dds["type"] = data.points[0].data.type

    featureIds = [];
    featureIdsTernary = [];

    data.points.forEach(function (pt) {
        featureIds.push(parseInt(pt.id))
        featureIdsTernary.push(parseInt(pt.pointNumber))
        dds["id"] = featureIds
        dds["tid"] = featureIdsTernary
    })
    //console.log(dds)
    window.status = JSON.stringify(dds)
})

// clicking function
plotly_div.on('plotly_click', function (data) {
    var featureIds = [];
    var dd = {};
    dd["fidd"] = data.points[0].id
    dd["mode"] = 'clicking'

    // loop and create dictionary depending on plot type
    for (var i = 0; i < data.points.length; i++) {

        // scatter plot
        if (data.points[i].data.type == 'scatter') {
            dd["uid"] = data.points[i].data.uid
            dd["type"] = data.points[i].data.type

            data.points.forEach(function (pt) {
                dd["fid"] = pt.id
            })
        }

        // pie

        else if (data.points[i].data.type == 'pie') {
            dd["type"] = data.points[i].data.type
            dd["label"] = data.points[i].label
            dd["field"] = data.points[i].data.name
            console.log(data.points[i].label)
            console.log(data.points[i])
        }

        // histogram
        else if (data.points[i].data.type == 'histogram') {
            dd["type"] = data.points[i].data.type
            dd["uid"] = data.points[i].data.uid
            dd["field"] = data.points[i].data.name

            // correct axis orientation
            if (data.points[i].data.orientation == 'v') {
                dd["id"] = data.points[i].x
                dd["bin_step"] = data.points[i].fullData.xbins.size
            }
            else {
                dd["id"] = data.points[i].y
                dd["bin_step"] = data.points[i].fullData.ybins.size
            }
        }

        // box plot
        else if (data.points[i].data.type == 'box') {
            dd["uid"] = data.points[i].data.uid
            dd["type"] = data.points[i].data.type
            dd["field"] = data.points[i].data.customdata[0]

            // correct axis orientation
            if (data.points[i].data.orientation == 'v') {
                dd["id"] = data.points[i].x
            }
            else {
                dd["id"] = data.points[i].y
            }
        }

        // violin plot
        else if (data.points[i].data.type == 'violin') {
            dd["uid"] = data.points[i].data.uid
            dd["type"] = data.points[i].data.type
            dd["field"] = data.points[i].data.customdata[0]

            // correct axis orientation (for violin is viceversa)
            if (data.points[i].data.orientation == 'v') {
                dd["id"] = data.points[i].x
            }
            else {
                dd["id"] = data.points[i].y
            }
        }

        // bar plot
        else if (data.points[i].data.type == 'bar') {
            dd["uid"] = data.points[i].data.uid
            dd["type"] = data.points[i].data.type
            dd["field"] = data.points[i].data.customdata[0]

            // correct axis orientation
            if (data.points[i].data.orientation == 'v') {
                dd["id"] = data.points[i].x
            }
            else {
                dd["id"] = data.points[i].y
            }
        }

        // ternary
        else if (data.points[i].data.type == 'scatterternary') {
            dd["uid"] = data.points[i].data.uid
            dd["type"] = data.points[i].data.type
            dd["field"] = data.points[i].data.customdata
            dd["fid"] = data.points[i].pointNumber
        }

    }
    window.status = JSON.stringify(dd)
});

