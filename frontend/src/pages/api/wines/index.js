
const wines = [
    { id: 1, name: "Cabernet Sauvignon", type: "Red" },
    { id: 2, name: "Chardonnay", type: "White" },
    // ... more wines
];

export default function(req, res) {
    res.status(200).json(wines);
};
