const wines = {
    1: { id: 1, name: "Cabernet Sauvignon", type: "Red",  region: "Napa Valley", country: "United States",
        flavor: "Full-bodied", aroma: "Dark fruits and spices"},
    2: { id: 2, name: "Chardonnay", type: "White", region: "Bordeaux", country: "France",
        flavor: "Crisp", aroma: "Citrus and green apple"},
};

export default function(req, res) {
    const { id } = req.query;
    const wine = wines[id];



    if (!wine) {
        return res.status(404).json({ error: "Wine not found" });
    }

    res.status(200).json(wine);
};
