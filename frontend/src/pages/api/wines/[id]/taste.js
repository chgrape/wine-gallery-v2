const tasteProfiles = {
    1: { flavor: "Full-bodied", aroma: "Dark fruits and spices", /* ... */ },
    2: { flavor: "Crisp", aroma: "Citrus and green apple", /* ... */ },
    // ... more taste profiles
};

export default function(req, res) {
    const { id } = req.query;
    const tasteProfile = tasteProfiles[id];

    if (!tasteProfile) {
        return res.status(404).json({ error: "Taste profile not found" });
    }

    res.status(200).json(tasteProfile);
};
