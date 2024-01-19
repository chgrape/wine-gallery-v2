const wines = {
    1: { id: 1, name: "Cabernet Sauvignon", type: "Red", /* ... */ },
    2: { id: 2, name: "Chardonnay", type: "White", /* ... */ },
    // ... more wines
};

export default function(req, res) {
    const { id } = req.query;
    const wine = wines[id];

    if (!wine) {
        return res.status(404).json({ error: "Wine not found" });
    }

    res.status(200).json(wine);
};
