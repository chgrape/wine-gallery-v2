const origins = {
    1: { originId: 1, region: "Napa Valley", country: "United States", /* ... */ },
    2: { originId: 2, region: "Bordeaux", country: "France", /* ... */ },
    // ... more origins
};

export default function(req, res) {
    const { id } = req.query;
    const origin = origins[id];

    if (!origin) {
        return res.status(404).json({ error: "Origin not found" });
    }

    res.status(200).json(origin);
};
