
const wines = [
    { id: 1, name: "Cabernet Sauvignon", type: "Red",  region: "Napa Valley", country: "United States", },
    { id: 2, name: "Chardonnay", type: "White", region: "Bordeaux", country: "France", },
    // ... more wines
];

export default function(req, res) {
    res.status(200).json(wines);
};
