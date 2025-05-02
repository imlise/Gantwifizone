function formatTogoleseNumber(input) {
    // On retire tout ce qui n'est pas chiffre
    let value = input.value.replace(/\D/g, '');

    // On limite à 8 chiffres maximum
    value = value.substring(0, 8);

    // On applique un format type 90 12 34 56
    let formatted = value.replace(/(\d{2})(\d{2})?(\d{2})?(\d{2})?/, function(_, p1, p2, p3, p4) {
        return [p1, p2, p3, p4].filter(Boolean).join(' ');
    });

    input.value = formatted;
}

